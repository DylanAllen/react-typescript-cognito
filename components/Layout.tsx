import * as React from 'react'
import Head from 'next/head'
import { Grommet, Box } from 'grommet'
import { theme } from '../utils/theme.js'
import AuthWrapper from './AuthWrapper'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { stateTypes } from '../interfaces'

type Props = {
  title?: string,
  auth?: boolean,
  state?: stateTypes,
  dispatch?: any
}

const Layout: React.FunctionComponent<Props> = (Props) => {
  const {
    children,
    title = 'This is the default title',
  } = Props

  return (
    <Grommet theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
      <SiteHeader {...Props}/>
      <AuthWrapper {...Props}>
          {children}
      </AuthWrapper>
      <SiteFooter {...Props} />
      </Box>
    </Grommet>
  )
}

export default Layout
