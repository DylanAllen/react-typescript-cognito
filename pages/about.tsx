import * as React from 'react'
import Layout from '../components/Layout'
import { Box, Heading, Paragraph } from 'grommet'

const AboutPage: React.FunctionComponent = (Props) => (
  <Layout title="About | Next.js + TypeScript Example" {...Props}>
    <Box pad="medium">
      <Heading>
        About
      </Heading>
      <Paragraph>
        This is an example about page.
      </Paragraph>
    </Box>
    <Box background='accent-1' pad="medium">
    <Paragraph>
      A simple page using basic Grommet components.<br/>No auth restrictions, no funny business.
    </Paragraph>
    </Box>
  </Layout>
)

export default AboutPage
