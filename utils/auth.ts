import { CognitoAuth, CognitoAuthOptions } from 'amazon-cognito-auth-js';

var authData: CognitoAuthOptions = {
    ClientId : '<TODO: add ClientId>', // Your client id here
    AppWebDomain : '<TODO: add App Web Domain>',
    TokenScopesArray : ['<TODO: add scope array>'], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
    RedirectUriSignIn : '<TODO: add redirect url when signed in>',
    RedirectUriSignOut : '<TODO: add redirect url when signed out>',
    IdentityProvider : '<TODO: add identity provider you want to specify>', // e.g. 'Facebook',
    UserPoolId : '<TODO: add UserPoolId>', // Your user pool id here
};
const cognitoAuth: CognitoAuth = new CognitoAuth(authData);

cognitoAuth.useCodeGrantFlow();
const curUrl = window.location.href;
cognitoAuth.parseCognitoWebResponse(curUrl);

cognitoAuth.userhandler = {
  onSuccess: function(result: any) {
    signInHandler(result);
  },
  onFailure: function(err: any) {
    console.log("Error!", err);
  }
};

const signInHandler = async (result: any) => {
  console.log(result);
}

export function initAuth() {
  cognitoAuth.getSession();
}

export function auth() {

}

export function signOut() {
  cognitoAuth.signOut();
}
