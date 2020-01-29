import { CognitoAuth, CognitoAuthOptions } from 'amazon-cognito-auth-js'
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import { env } from '../config'

export class authUtil {
  authData: CognitoAuthOptions = {
    ClientId : env.cognitoClientId,
    AppWebDomain : `${env.cognitoDomain}.auth.${env.region}.amazoncognito.com`,
    TokenScopesArray : env.authScopes,
    RedirectUriSignIn : `${window.location.origin}/login`,
    RedirectUriSignOut : window.location.origin,
    IdentityProvider : env.identityProvider,
    UserPoolId : env.cognitoUserPoolId
  };

  cognitoAuth: CognitoAuth = new CognitoAuth(this.authData);
  userPool = new CognitoUserPool({
    UserPoolId: env.cognitoUserPoolId,
    ClientId: env.cognitoClientId
  })

  constructor() {
    this.cognitoAuth.useCodeGrantFlow();
  }

  userHandler = async () => {
    return new Promise((resolve, reject) => {
      this.cognitoAuth.userhandler = {
        onSuccess: function(result: any) {
          resolve(result)
        },
        onFailure: function(err: any) {
          reject(err)
        }
      };
    })
  }

  public isAuthenticated() {
    return new Promise(async (resolve) => {
      let user = this.userPool.getCurrentUser();
      if (user) {
        resolve(true)
      } else {
        const curUrl = window.location.href;
        if (window.location.search.startsWith('?code=')) {
          this.cognitoAuth.parseCognitoWebResponse(curUrl);
          await this.userHandler();
          user = this.userPool.getCurrentUser();
          if (user) {
            resolve(true)
          }
        }
        resolve(false);
      }
    })
  }

  public initAuth() {
    this.cognitoAuth.getSession();
  }

  public signOut() {
    this.cognitoAuth.signOut();
  }

}
