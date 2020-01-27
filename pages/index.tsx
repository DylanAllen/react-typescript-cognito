import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { Heading, Box, List, WorldMap, Paragraph, Clock } from 'grommet'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example" auth={false}>
      <Heading textAlign="center">React-TS-Cognito</Heading>
      <Box pad="medium">
        <Clock type="digital" size="xlarge" alignSelf="center" />
        <Heading level={3} textAlign="center">
          This is a boilerplate app that uses:
        </Heading>
        <Paragraph alignSelf="center">
          <List
            primaryKey="name"
            alignSelf="center"
            data={[
              { name: 'React' },
              { name: 'TypeScript' },
              { name: 'Cognito' },
              { name: 'Serverless Framework' },
              { name: 'Grommet' },
            ]}
          />
          </Paragraph>
      </Box>
      <Box background="brand">

      <WorldMap
        color="neutral-1"
        continents={[
          {
            name: 'North America',
            color: 'light-5',
            onClick: () => {},
          },
        ]}
        onSelectPlace={() => {}}
        places={[
          {
            name: 'Sydney',
            location: [-33.8830555556, 151.216666667],
            color: 'accent-2',
            onClick: () => {},
          },
        ]}
        />
      </Box>
    </Layout>
  )
}

export default IndexPage
