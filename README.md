# React TS Cognito App

### [App Demo](https://d26huhw2qpjfd5.cloudfront.net)

This is a starter app template that uses React, TypeScript, NextJS, Grommet, and Serverless. It has fully automated deployments, and Cognito authentication built into the app.

## Install

Before you deploy or run this app, configure the `config\dev.yml` file with your parameters:

```yml
cognitoDomain: 'reacttsbp'  # globally uniqie Cognito subdomain (definitely change this)
identityProviderName: 'COGNITO' # Leave as is unless you are integrating a SAML IDP (you probably aren't)
webDomain: http://localhost:3000 # this is OK for dev, but change to a domain for prod
authCallbackPath: /login # Don't change this
signoutCallbackPath: '' # Don't change this either
samlLogin: false # And don't change this :)
```
Now you are ready to deploy

```bash
npm i

sls deploy --stage dev
# or if you want to use an alternate profile
sls deploy --stage dev --profile yourprofilename
```

If everything goes according to plan, several minutes later you will have a fully build and deployed webapp.

## Run locally

```
npm run dev
```

## Modifying the app
This app is built with the [NextJS](https://nextjs.org/) framework, so you can follow their docs to learn more about the project structure. I also use [Grommet](https://grommet.io) components. It is kind of like Bootstrap but only for React and newer and cooler.

A few of the basic things you need to know are:

#### Creating a page
To add a new page, create a `.tsx` file in the `pages/` directory.
#### Site Theme
The Grommet theme code is `utils/theme.js` you can use Grommet's online [themer](https://theme-designer.grommet.io/Dashboard) tool to come up with your own and overwrite the theme object with your own.

#### Application state (reducer)
The reducer is in `utils/reducer.ts` and it's `state` and `dispatch` function are being passed as props from the main `pages/_app.tsx` file, so as long as you continue to pass `{...Props}` to you page and child components, you will be able to access state and dispatch from anywhere.

The app is currently only using this for updating the authState, but the idea is that you can store all application state here, and expand the reducer. Just be sure to add the type for any additional state properties in the `interfaces/index.ts` file. (TypeScript will yell at you if you don't anyway)

```ts
import { stateTypes, actionType } from '../interfaces';

export const initialState: stateTypes = {
  authState: 'unauthenticated',
  user: null,
  session: null,
  credentials: null
}

export const initReducer = (state: stateTypes = initialState) => {
    return state;
}

const copyState = (state: stateTypes) => {
  return JSON.parse(JSON.stringify(state));
}

export const appReducer = (state: stateTypes, action: actionType): stateTypes => {
  let newState = copyState(state);
  switch (action.type) {
    case 'setAuthState':
      newState.authState = action.value;
      return newState;
      ...
```


## Redeploy app
You can deploy the webapp without a full stack redeploy with this sls plugin command:
``` bash
sls taleBuildAndDeployApps --stage dev
```

## Authentication
Authentication is built into the app with AWS Cognito. All of the resources are created and configured on deployment. You can make a page available only to logged in users by added a `auth={true}` tag to the `<Layout>` component on that page.The Admin page is an example:

```tsx
<Layout title="Auth Guarded Page" auth={true} {...Props}>
  <Box pad="medium">
    <Heading textAlign="center">
      Admin
    </Heading>
    <Paragraph textAlign="center">
      An auth guarded page.
    </Paragraph>
  </Box>
</Layout>
```
When a user goes to a auth guarded route, the app checks their auth status, and will bounce them out to the hosted Cognito login page if they are not authenticated.
