import * as React from 'react'
import Link from './Link'
import Head from 'next/head'
import { Grommet } from 'grommet'
import { theme } from '../utils/theme.js'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <Grommet theme={theme}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link path="/" label="Home" />{' '}
        |{' '}
        <Link path="/about" label="About" />{' '}
        |{' '}
        <Link path="/users" label="Users List" />
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </Grommet>
)

export default Layout
