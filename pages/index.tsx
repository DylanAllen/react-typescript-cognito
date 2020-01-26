import * as React from 'react'
import Link from '../components/Link';
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link path="/about" label="About" />
      </p>
    </Layout>
  )
}

export default IndexPage
