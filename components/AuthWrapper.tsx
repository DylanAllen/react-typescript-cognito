import * as React from 'react'
import { authUtil } from '../utils/auth'
import { useEffect, useState } from 'react'
import { Box, Heading } from 'grommet'

type Props = {
  auth?: boolean,
  state?: any,
  dispatch?: any
}

const CheckingAuth = () => {
  return (
    <Box>
      <Heading margin="medium" textAlign="center" alignSelf="center">
        Checking Auth Status...
      </Heading>
    </Box>
  )
}

const AuthWrapper: React.FunctionComponent<Props> = ({ auth, children, state, dispatch}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const asyncWrap = async () => {
      if (auth && state.authState === 'unauthenticated') {
        setShow(false)
        const Authorizer = new authUtil();
        const isAuth = await Authorizer.isAuthenticated();
        if (isAuth) {
          setShow(true)
          dispatch({type: 'setAuthState', value: 'authenticated'})
        } else {
          Authorizer.initAuth()
        }
      } else {
        setShow(true);
      }
    }
    asyncWrap();
  }, [auth, state.authState])

  return (
    <div>
      {show && children}
      {!show && <CheckingAuth />}
    </div>
  )
}

export default AuthWrapper
