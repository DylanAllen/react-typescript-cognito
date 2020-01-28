import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Link from '../components/Link'
import { Heading, Box, List, Clock, Markdown } from 'grommet'

const IndexPage: NextPage = (Props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example" auth={false} {...Props}>
      <Box>
        <Heading textAlign="center" alignSelf="center">React-TS-Cognito</Heading>
        <Box pad="medium">
          <Clock type="digital" size="xlarge" alignSelf="center" />
          <Heading level={3} textAlign="center" alignSelf="center" color="brand">
            This is a boilerplate app that uses:
          </Heading>
          <Box alignSelf="center" width="370px">
            <List
              primaryKey="name"
              secondaryKey="link"
              alignSelf="center"
              pad="medium"
              data={[
                { name: 'Next.js', link: <Link label="nextjs.org" href='https://nextjs.org/' /> },
                { name: 'React', link: <Link label="reactjs.org" href='https://reactjs.org/' /> },
                { name: 'Grommet', link: <Link label="grommet.io" href='https://grommet.io/' />  },
                { name: 'Serverless', link: <Link label="serverless.com" href='https://serverless.com/' />  },
                { name: 'TypeScript', link: <Link label="typescriptlang.org" href="https://www.typescriptlang.org" /> },
                { name: 'Cognito', link: <Link label="amazon.com/cognito" href='https://aws.amazon.com/cognito/' /> }
              ]}
            />
            </Box>
        </Box>
        <Box background="accent-4" alignSelf="center" pad="large" width="100vw" overflow="scroll">
          <Box width="800px" alignSelf="center">
            <Markdown>
              {"# Install & Deploy\r\n\r\nThis is a starter app template that uses React, TypeScript, NextJS, Grommet, and Serverless. It has fully automated deployments, and Cognito authentication built into the app.\r\n\r\n## Install\r\n\r\nBefore you deploy or run this app, you have to update the cognitoDomain in the `conf\\dev.yml` file with a unique value for your Cognito subdomain. This must be globally unique, so pick something fairly creative (but relevant to your peoject):\r\n\r\n```yml\r\ncognitoDomain: 'reacttsbp'\r\nidentityProviderName: 'COGNITO' \r\nwebDomain: http:\/\/localhost:3000\r\nauthCallbackPath: \/login \r\nsignoutCallbackPath: \/\r\nsamlLogin: false\r\n```\r\nNow you are ready to deploy\r\n\r\n```bash\r\nnpm i\r\n\r\nsls deploy --stage dev\r\n# or if you want to use an alternate profile\r\nsls deploy --stage dev --profile yourprofilename\r\n```\r\n\r\nIf everything goes according to plan, several minutes later you will have a fully build and deployed webapp.\r\n\r\n## Run locally\r\n\r\n```\r\nnpm run dev\r\n```\r\n\r\n## Modify the app\r\nThis app is built with the [NextJS](https:\/\/nextjs.org\/) framework, so you can follow their docs to learn more about the project structure.\r\n\r\nIt also uses [Grommet](https:\/\/grommet.io) components. It is kind of like Bootstrap but only for React and newer and cooler.\r\n\r\n## Redeploy app\r\nYou can deploy the webapp without a full stack redeploy with this sls plugin command:\r\n``` bash\r\nsls taleBuildAndDeployApps --stage dev\r\n```"}
            </Markdown>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
