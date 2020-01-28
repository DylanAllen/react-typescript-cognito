import * as React from 'react'
import { Header } from 'grommet'
import NavMenu from './NavMenu'

const SiteHeader: React.FunctionComponent = (Props) => {

  return (
    <Header background="brand">
      <NavMenu {...Props} />
    </Header>
  )
}

export default SiteHeader
