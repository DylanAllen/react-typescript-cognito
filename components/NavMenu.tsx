import * as React from 'react'
import Link from './Link'
import { Nav } from 'grommet'
import { stateTypes } from '../interfaces'
import { authUtil } from '../utils/auth'

type Props = {
  state?: stateTypes,
  dispatch?: any
}

const NavMenu: React.FunctionComponent<Props> = (Props) => {

  const logOut = () => {
    const auth = new authUtil();
    Props.dispatch({ type: 'setAuthState', value: 'unauthenticated'})
    auth.signOut();
  }
  let state = Props.state || { authState: 'unauthenticated' }

  return (
    <Nav direction="row" pad="medium">
      <Link path="/" label="Home" color="background-1" />
      <Link path="/about" label="About" color="background-1"  />
      <Link path="/admin" label="Admin Page" color="background-1" />
      { (state.authState !== 'unauthenticated') && <Link onClick={logOut} label="Sign Out" color="background-1" /> }
      { (state.authState === 'unauthenticated') && <Link path='/login' label="Log in" color="background-1" />}
    </Nav>
  )
}

export default NavMenu
