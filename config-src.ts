export const env: Object = {
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
