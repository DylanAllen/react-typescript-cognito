type env = {
  region: string,
  webDomain: string,
  identityProvider: string,
  cognitoDomain: string,
  cognitoClientId: string,
  cognitoUserPoolId: string,
  identityPoolId: string,
  authScopes: string[]
}

export const env: env = {
  region: '%CF:Region%',
  webDomain: '%CF:WebDomain%',
  identityProvider: '%CF:IdentityProviderName%',
  cognitoDomain: '%CF:CognitoDomain%',
  cognitoClientId: '%CF:CognitoUserPoolClientId%',
  cognitoUserPoolId: '%CF:CognitoUserPoolId%',
  identityPoolId: '%CF:CognitoIdentityPoolId%',
  authScopes: [
    'phone',
    'email',
    'profile',
    'openid'
  ],
}
