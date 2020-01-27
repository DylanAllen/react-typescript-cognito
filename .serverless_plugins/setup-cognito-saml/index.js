'use strict';

const fs = require('fs');

const getCfOutput = async (stackName, region, provider) => {
  const cfOutputs = {};
  try {
    const stackData = await provider.request('CloudFormation', 'describeStacks', { StackName: stackName });
    const outputs = stackData.Stacks[0].Outputs;
    for (const o of outputs) {
      cfOutputs[o.OutputKey] = o.OutputValue;
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  return cfOutputs;
};

const writeSpMetadataToDisk = async (cognitoDomain, cognitoUserPoolId, cognitoUserPoolRegion, bucketName, provider) => {
  const entity = `urn:amazon:cognito:sp:${cognitoUserPoolId}`;
  const assertionConsumerUrl = `https://${cognitoDomain}.auth.${cognitoUserPoolRegion}.amazoncognito.com/saml2/idpresponse`;
  const metadataXml =
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><EntityDescriptor entityID="${entity}" xmlns="urn:oasis:names:tc:SAML:2.0:metadata"><SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</NameIDFormat><AssertionConsumerService index="0" isDefault="true" Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="${assertionConsumerUrl}"/></SPSSODescriptor></EntityDescriptor>`
  try {
    fs.writeFileSync('exports/cognito/sp.xml', metadataXml);
    const putParams = {
      Bucket: bucketName,
      Key: 'sp.xml',
      Body: new Buffer.from(metadataXml)
    }

    await provider.request('S3', 'putObject', putParams);

  } catch (error) {
    console.error(error);
  }
};

const getCallbackUrls = async (sls, provider) => {
  sls.cli.log('Getting callback urls');
  const domain = sls.service.custom.webDomain
  let authCallbackUrl = [`${sls.service.custom.config.webDomain}${sls.service.custom.config.authCallbackPath}`];
  let signoutUrls = [`${sls.service.custom.config.webDomain}${sls.service.custom.config.signoutCallbackPath}`];
  const webAppConfigs = sls.service.custom.config.webAppConfig
  sls.cli.log(authCallbackUrl)
  if (!webAppConfigs) {
    return { authCallbackUrl, signoutUrls };
  }
  await Promise.all(
    Object.keys(webAppConfigs).map(async (app) => {
      console.log(webAppConfigs[app]);
      const { webAppDeploymentBucket } = webAppConfigs[app]
      const getParams = {
        Bucket: webAppDeploymentBucket,
        Key: `cloudfrontDistro/${webAppDeploymentBucket}-CFDistro.json`,
      }
      sls.cli.log(JSON.stringify(getParams, null, 2));
      const response = await provider.request('S3', 'getObject', getParams);
      const cfInfo = JSON.parse(response.Body.toString('utf-8'));
      authCallbackUrl.push(`https://${cfInfo.Distribution.DomainName}${sls.service.custom.config.authCallbackPath}`);
      signoutUrls.push(`https://${cfInfo.Distribution.DomainName}${sls.service.custom.config.signoutCallbackPath}`);
    })
  );
  sls.cli.log(authCallbackUrl)
  return { authCallbackUrl, signoutUrls };
}

const doWork = async (sls, provider) => {

  // gather CloudFormation output values from the current deployment stack
  const cfOutput = await getCfOutput(sls.service.provider.stackName, sls.service.provider.region, provider);
  const userPoolClientId = cfOutput['CognitoUserPoolClientId'];
  const userPoolId = cfOutput['CognitoUserPoolId'];
  let identityProvider = sls.service.custom.config.identityProviderName;
  const { authCallbackUrl, signoutUrls } = await getCallbackUrls(sls, provider);
  const samlAttributeMapping = sls.service.custom.samlAttributeMapping;
  const metadataUrl = sls.service.custom.MetadataURL;
  const samlEnabled = sls.service.custom.config.samlLogin;
  const cognitoDomain = sls.service.custom.config.cognitoDomain;
  sls.cli.log('Auth Callback Urls');
  sls.cli.log(authCallbackUrl);

  if (!userPoolId || !identityProvider) {
    throw "Missing required configuration";
  }
  try {
    // 0. Create the Cognito identity provider, importing metadata and setting attribute mappings

    let idpCreationResponse, idpMetadata;
    if (samlEnabled) {
      sls.cli.log('idpMetadata');
      let providerDetails = {};
      if (metadataUrl) {
        providerDetails = {
          "MetadataURL": metadataUrl
        }
      } else {
        idpMetadata = fs.readFileSync('exports/cognito/idp.xml', 'utf-8');
        providerDetails = {
          "MetadataFile": idpMetadata
        }
      }

      idpCreationResponse = await provider.request('CognitoIdentityServiceProvider', 'createIdentityProvider', {
        UserPoolId: userPoolId,
        ProviderName: identityProvider,
        ProviderType: 'SAML',
        ProviderDetails: providerDetails,
        AttributeMapping: samlAttributeMapping
      });
      sls.cli.log('ipd created');
    } else {
      identityProvider = 'COGNITO';
    }
    sls.cli.log('idp creation response');
    sls.cli.log(JSON.stringify(idpCreationResponse, null, 2));

    // 2. Update the Cognito application client with the correct callbacks and auth mechanism(s)
    const appClientParams = {
      ClientId: userPoolClientId,
      UserPoolId: userPoolId,
      AllowedOAuthFlowsUserPoolClient: true,
      AllowedOAuthFlows: [ 'code', 'implicit' ],
      AllowedOAuthScopes: [ 'phone', 'email', 'openid', 'profile' ],
      CallbackURLs: authCallbackUrl,
      LogoutURLs: signoutUrls,
      SupportedIdentityProviders: [ identityProvider ]
    }
    sls.cli.log(JSON.stringify(appClientParams, null, 2));
    const appClientUpdateResponse = await provider.request('CognitoIdentityServiceProvider', 'updateUserPoolClient', appClientParams);
    sls.cli.log(appClientUpdateResponse);
    if (idpCreationResponse && appClientUpdateResponse) {
      sls.cli.log(`Successfully configured SAML for IdP [${identityProvider}] in user pool [${userPoolId}]`);
    }

    // 3. Generate SP metadata to be installed by the IdP
    await writeSpMetadataToDisk(cognitoDomain, userPoolId, sls.service.provider.region, sls.service.provider.deploymentBucket, provider);
  } catch (error) {
    sls.cli.log(error);
    if (error.ServerlessError) {
      switch (error.ServerlessError.code) {
        case 'DuplicateProviderException':
          sls.cli.log(`IdP [${identityProvider}] already configured on userpool [${userPoolId}]`);
          break;
        default:
          sls.cli.log(error.ServerlessError.code);
      }
    }
  }
};

class SetupCognitoSAML {
  constructor(serverless) {
    this.serverless = serverless;
    this.provider = this.serverless.getProvider("aws")
    this.commands = {
      setupCognito: {
        usage: 'Sets up Idp',
        lifecycleEvents: [
          'cognitoSetup',
        ],
        options: {
          message: {},
        },
      },
    };
    this.hooks = {
      'after:deploy:deploy': doWork.bind(this, serverless, this.provider),
      'setupCognito:cognitoSetup': doWork.bind(this, serverless, this.provider)
    };
  }
}

module.exports = SetupCognitoSAML;
