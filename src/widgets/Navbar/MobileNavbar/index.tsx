import React from 'react'
import styled from 'styled-components'

import Icon from '@/components/Icon'
import Link from '@/components/Link'

const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;

  background-color: ${p => p.theme.black88};

  @media (${p => p.theme.screens.smallDesktop}) {
    display: none;
  }
`

const Item = styled(Link).attrs({
  color: 'white',
  undecorated: true
})`
  align-items: center;
  display: inline-flex;
  height: 4rem;
  justify-content: center;
`

const Brand = styled(Item)`
  padding: 0 1rem;

  font-size: 1.125rem;
  font-weight: 700;
`

const Action = styled(Item)`
  padding: 0 1.25rem;

  font-size: 1.25rem;
`

const LoginAction = () => (
  <Action to='/login'>
    <Icon name='sign-in-alt' />
  </Action>
)

const AccountAction = () => (
  <Action to='/account'>
    <Icon name='user-circle' />
  </Action>
)

const MobileNavbar = ({ isAuthenticated, name, ...rest }) => (
  <Wrapper {...rest}>
    <Brand to='/'>
      FREE ASSEMBLY
    </Brand>
    <div>
      <Action to='/search'>
        <Icon name='search' />
      </Action>
      {isAuthenticated
        ? <AccountAction />
        : <LoginAction />
      }
    </div>
  </Wrapper>
)

export default MobileNavbar
