import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Layout title="Auth Guarded Page" auth={true}>
      <h1>You are logged in!</h1>
    </Layout>
  )
}

export default LoginPage
