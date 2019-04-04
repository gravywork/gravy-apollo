import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${p => p.theme[p.bgColor]};
`

const Inner = styled.div`
  max-width: 68rem;
  width: 100%;
`

const PageWrapper = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Inner>
      {children}
    </Inner>
  </Wrapper>
)

PageWrapper.defaultProps = {
  bgColor: 'transparent'
}

export default PageWrapper
