import * as React from 'react'
import Head from 'next/head'
import { Grommet, Box, Footer } from 'grommet'
import { theme } from '../utils/theme.js'
import AuthWrapper from './AuthWrapper'
import SiteHeader from './SiteHeader'
import { useReducer } from 'react'
import { appReducer, initialState, initReducer } from '../utils/reducer'

type Props = {
  title?: string,
  auth?: boolean
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
  auth = false
}) => {

  const [state, dispatch] = useReducer(appReducer, initialState, initReducer)

  return (
    <Grommet theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <SiteHeader state={state} dispatch={dispatch} />
        <AuthWrapper auth={auth} state={state} dispatch={dispatch}>
            {children}
        </AuthWrapper>
        <Footer>
          <hr />
          <span>I'm here to stay (Footer)</span>
        </Footer>
      </Box>
    </Grommet>
  )
}

export default Layout
