import { CognitoAuth, CognitoAuthOptions } from 'amazon-cognito-auth-js'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { env } from '../config'

var authData: CognitoAuthOptions = {
  ClientId : env.cognitoClientId,
  AppWebDomain : `${env.cognitoDomain}.auth.${env.region}.amazoncognito.com`,
  TokenScopesArray : env.authScopes,
  RedirectUriSignIn : `${env.webDomain}/login`,
  RedirectUriSignOut : env.webDomain,
  IdentityProvider : env.identityProvider,
  UserPoolId : env.cognitoUserPoolId
};
const cognitoAuth: CognitoAuth = new CognitoAuth(authData);
const userPool = new CognitoUserPool({
  UserPoolId: env.cognitoUserPoolId,
  ClientId: env.cognitoClientId
})

cognitoAuth.useCodeGrantFlow();

export const userHandler = async () => {
  console.log('user handler called')
  return new Promise((resolve, reject) => {
    console.log('creating userHandler')
    cognitoAuth.userhandler = {
      onSuccess: function(result: any) {
        resolve(result)
      },
      onFailure: function(err: any) {
        reject(err)
      }
    };
  })
}

export function initAuth() {
  cognitoAuth.getSession();
}

export function isAuthenticated() {
  return new Promise(async (resolve) => {
    let user = userPool.getCurrentUser();
    if (user) {
      resolve(true)
    } else {
      const curUrl = window.location.href;
      if (window.location.search.startsWith('?code=')) {
        cognitoAuth.parseCognitoWebResponse(curUrl);
        await userHandler();
        user = userPool.getCurrentUser();
        if (user) {
          resolve(true)
        }
      }
      resolve(false);
    }
  })

}

export function signOut() {
  cognitoAuth.signOut();
}
