import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { Box, Heading, Paragraph } from 'grommet'

const AdminPage: NextPage = (Props) => {
  console.log(Props)
  return (
    <Layout title="Auth Guarded Page" auth={true} {...Props}>
    <Box pad="medium">
      <Heading textAlign="center">
        Admin
      </Heading>
      <Paragraph textAlign="center">
        An auth guarded page.
      </Paragraph>
    </Box>
    <Box background='accent-4' pad="medium">
    <Paragraph>
      {"Add auth={true} to the Layout component to make a page available to logged in users only."}
    </Paragraph>
    </Box>
    </Layout>
  )
}

export default AdminPage
