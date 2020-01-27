import * as React from 'react'
import { initAuth, isAuthenticated } from '../utils/auth'
import { useEffect, useState } from 'react'

type Props = {
  auth?: boolean,
  state: any,
  dispatch: any
}

const AuthWrapper: React.FunctionComponent<Props> = ({ auth, children, state, dispatch}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const asyncWrap = async () => {
      if (auth && state.authState === 'unauthenticated') {
        setShow(false)
        const isAuth = await isAuthenticated();
        if (isAuth) {
          setShow(true)
          dispatch({action: 'setAuthState', value: 'authenticated'})
        } else {
          initAuth()
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
    </div>
  )
}

export default AuthWrapper
