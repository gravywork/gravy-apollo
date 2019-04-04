import React from 'react'
import styled, { css } from 'styled-components'

import Link from '@/components/Link'

const fullStyles = css`
  justify-content: space-between;
`

const Wrapper = styled.nav`
  align-items: center;
  display: none;
  justify-content: center;
  padding: 0 2rem;

  background-color: ${p => p.theme[p.bgColor]};

  @media (${p => p.theme.screens.smallDesktop}) {
    display: flex;
  }

  ${p => p.full && fullStyles};
`

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 68rem;
`

const Item = styled(Link).attrs({
  color: 'white88',
  hoverColor: 'white',
  undecorated: true,
  weight: 500
})`
  align-items: center;
  display: inline-flex;
  height: 4rem;
  justify-content: center;
  padding: 0 0.75rem;

  position: relative;

  &::after {
    content: '';
    display: none;
    height: 0.125rem;
    width: 1.5rem;

    bottom: 1rem;
    left: calc(50% - 0.75rem);
    position: absolute;

    background-color: white;
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`

const LoginItem = () => (
  <Item to='/login'>
    Log in
  </Item>
)

const AccountItem = ({ name }) => (
  <Item to='/account'>
    {name}
  </Item>
)

const Content = ({ isAuthenticated, name }) => (
  <>
    <Link
      undecorated
      color='white'
      hoverColor='white'
      size={1.25}
      to='/'
      weight={700}
    >
      FREE ASSEMBLY
    </Link>
    <div>
      <Item to='/search'>
        Search
      </Item>
      <Item to='/host'>
        Host
      </Item>
      {isAuthenticated
        ? <AccountItem name={name} />
        : <LoginItem />
      }
    </div>
  </>
)

const DesktopNavbar = ({ full, ...rest }) => (
  <Wrapper {...rest} full={full}>
    {full
      ? <Content {...rest} />
      : <Inner>
          <Content {...rest} />
        </Inner>
    }
  </Wrapper>
)

DesktopNavbar.defaultProps = {
  bgColor: 'transparent',
  full: false
}

export default DesktopNavbar
