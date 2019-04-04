import React from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.88; }
`

const Bar = styled.div`
  height: 1rem;
  margin-bottom: 1rem;
  width: ${p => p.width}%;
  background-color: ${p => p.theme.black16};
  animation: ${pulse} 4s linear infinite;
`

const Bars = () => (
  <div>
    <Bar width={20} />
    <Bar width={60} />
    <Bar width={100} />
    <Bar width={80} />
    <Bar width={40} />
  </div>
)

export default Bars
