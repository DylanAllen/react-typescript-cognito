import * as React from 'react'
import Link from '../components/Link';
import Layout from '../components/Layout'
import { NextPage } from 'next'

const AdminPage: NextPage = () => {
  return (
    <Layout title="Auth Guarded Page" auth={true}>
      <h1>Auth guarded page</h1>
      <p>
        <Link path="/about" label="About" />
      </p>
    </Layout>
  )
}

export default AdminPage
