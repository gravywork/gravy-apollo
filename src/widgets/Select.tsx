import React from 'react'
import styled from 'styled-components'

import Input from '@/components/Input'

const Wrapper = styled.div`
  width: 100%;

  position: relative;

  &::after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 0.5rem;

    position: absolute;
    right: 1.25rem;
    top: calc(50% - 0.5rem);

    border: 1px solid ${p => p.theme.black16};
    border-width: 0 2px 2px 0;

    transform: rotate(45deg);
  }
`

const SelectInput = styled(Input)`
  padding-right: 3rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;

  cursor: pointer;
`

const Select = ({ className, ...rest }) => (
  <Wrapper className={className}>
    <SelectInput as='select' {...rest} />
  </Wrapper>
)

export default Select
