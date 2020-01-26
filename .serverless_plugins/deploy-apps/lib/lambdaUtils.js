const fs = require("fs");
const findAndReplaceDependencies = async (functions, bucketName, sls, provider) => {
  const getParams = {
    Bucket: bucketName,
    Key: `cloudfrontDistro/${bucketName}-CFDistro.json`
  }
  const response = await provider.request('S3', 'getObject', getParams);
  const distInfo = JSON.parse(response.Body.toString('utf-8'));
  const funcKeys = Object.keys(functions);
  if ("environment" in sls.service.provider && "CLOUDFRONT_URL" in sls.service.provider.environment) {
    await Promise.all(
      funcKeys.map(async funcKey => {
        let func = functions[funcKey];
        let domain = distInfo.Distribution.DomainName;
        await updateConfiguration(func, domain, sls, provider);
      })
    );
  } else {
    await Promise.all(
      funcKeys.map(async funcKey => {
        let func = functions[funcKey];
        if (hasCloudFrontENV(func)) {
          let domain = distInfo.Distribution.DomainName;
          await updateConfiguration(func, domain, sls, provider);
        }
      })
    );
  }
};

const hasCloudFrontENV = func => {
  if ("environment" in func) {
    return func.environment.hasOwnProperty("CLOUDFRONT_URL");
  }
  return false;
};

const updateConfiguration = async (func, domain, sls, provider) => {
  const params = {
    FunctionName: func.name,
    Environment: {
      Variables: {
        CLOUDFRONT_URL: `https://${domain}`
      }
    }
  };
  await provider.request('Lambda', 'updateFunctionConfiguration', params);
};

module.exports = {
  findAndReplaceDependencies
};
