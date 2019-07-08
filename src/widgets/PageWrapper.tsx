import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem 3rem;

  background-color: ${p => p.theme[p.bgColor]};
`

const CenterWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
`

const Inner = styled.div`
  max-width: 68rem;
  width: 100%;
`

const PageWrapper = ({ children, full, ...rest }) => {
  if (full) {
    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
  }

  return (
    <CenterWrapper>
      <Inner>
        {children}
      </Inner>
    </CenterWrapper>
  )
}

PageWrapper.defaultProps = {
  bgColor: 'transparent'
}

export default PageWrapper
