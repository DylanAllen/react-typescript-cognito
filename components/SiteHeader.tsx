import * as React from 'react'
import Link from './Link'
import { Header, Nav } from 'grommet'
import { stateTypes } from '../interfaces'
import { signOut } from '../utils/auth'

type Props = {
  state: stateTypes,
  dispatch: any
}

const SiteHeader: React.FunctionComponent<Props> = ({ state, dispatch }) => {

  const logOut = () => {
    dispatch({ type: 'setAuthState', value: 'unauthenticated'})
    signOut();
  }

 return (
    <Header background="brand">
      <Nav direction="row" pad="medium">
        <Link path="/" label="Home" />
        <Link path="/about" label="About" />
        <Link path="/users" label="Users List" />
        <Link path="/admin" label="Admin Page" />
        <Link onClick={logOut} label="Sign Out" />
        { (state.authState === 'unauthenticated') && <Link path='/login' label="Log in" />}
      </Nav>
    </Header>
  )
}

export default SiteHeader
