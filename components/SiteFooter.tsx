import * as React from 'react'
import { Footer, Text } from 'grommet'
import NavMenu from './NavMenu'

const SiteFooter: React.FunctionComponent = (Props) => {

 return (
    <Footer background="brand">
      <NavMenu {...Props} />
      <Text margin="medium">&copy; Company 2020</Text>
    </Footer>
  )
}

export default SiteFooter
