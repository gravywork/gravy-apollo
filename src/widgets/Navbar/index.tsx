import React from 'react'

import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

import { selectIfAuthenticated, selectName } from '@/state/auth'

import { withState } from '@/util/provider'

const Navbar = (props) => (
  <>
    <DesktopNavbar {...props} />
    <MobileNavbar {...props} />
  </>
)

export default withState(state => ({
  isAuthenticated: selectIfAuthenticated(state),
  name: selectName(state)
}))(Navbar)
