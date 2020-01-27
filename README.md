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

## Modify the app
This app is built with the [NextJS](https://nextjs.org/) framework, so you can follow their docs to learn more about the project structure.

It also uses [Grommet](https://grommet.io) components. It is kind of like Bootstrap but only for React and newer and cooler.

## Redeploy app
You can deploy the webapp without a full stack redeploy with this sls plugin command:
``` bash
sls taleBuildAndDeployApps --stage dev
```
