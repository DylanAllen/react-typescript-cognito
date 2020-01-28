import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { Heading, Box, Clock } from 'grommet'

const LoginPage: NextPage = (Props) => {
  return (
    <Layout title="Login page" auth={true} {...Props}>
      <Box>
        <Heading alignSelf="center" textAlign="center">
          You are logged in!
        </Heading>
        <Clock type="analog" alignSelf="center" size="large"/>
      </Box>
    </Layout>
  )
}

export default LoginPage
