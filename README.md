# React TS Cognito App

This is a starter app template that uses React, TypeScript, NextJS, Grommet, and Serverless. It has fully automated deployments, and Cognito authentication built into the app.

## Install

Before you deploy or run this app, configure the `conf\dev.yml` file with your parameters:

```yml
cognitoDomain: 'reacttsbp'  # globally uniqie Cognito subdomain (definitely change this)
identityProviderName: 'COGNITO' # Leave as is unless you are integrating a SAML IDP (you probably aren't)
webDomain: http://localhost:3000 # this is OK for dev, but change to a domain for prod
authCallbackPath: /login # Don't change this
signoutCallbackPath: / # Don't change this either
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
This app is built with the [NextJS](https://nextjs.org/) framework, so you can follow their docs to learn more about the project structure.

It also uses [Grommet](https://grommet.io) components. It is kind of like Bootstrap but only for React and newer and cooler.

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
