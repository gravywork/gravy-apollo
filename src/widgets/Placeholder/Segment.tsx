import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const pulse = keyframes`
  0%, 100% { opacity: 0.85; }
  50% { opacity: 0.97; }
`

const Overlay = styled.div`
  align-items: center;
  display: flex;

  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  background-color: white;

  animation: ${pulse} 2s linear infinite;
  z-index: 1;
`

const Segment = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    {children}
    <Overlay />
  </Wrapper>
)

export default Segment
