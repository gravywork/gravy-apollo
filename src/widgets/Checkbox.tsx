import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.label`
  align-items: center;
  display: flex;

  position: relative;

  cursor: pointer;

  > input {
    height: 0;
    width: 0;
    user-select: none;

    position: absolute;

    opacity: 0;
  }
`

const Box = styled.div`
  height: 1.25rem;
  margin-right: 0.75rem;
  width: 1.25rem;

  position: relative;

  border: 2px solid ${p => p.theme.black8};
  border-radius: 3px;

  &::after {
    content: "";
    display: block;
    height: 0.25rem;
    width: 0.675rem;

    left: 2px;
    position: absolute;
    top: 3px;

    border: 1px solid white;
    border-width: 0 0 2px 2px;

    transform: rotate(-45deg);
  }

  input:checked + & {
    background-color: ${p => p.theme.black88};
  }
`

class Checkbox extends Component {
  private handleChange = ({ target: { checked, name } }) => (
    this.props.onChange({ target: { name, value: checked } })
  )

  public render() {
    const { children, name, value } = this.props

    return (
      <Wrapper htmlFor={name}>
        <input
          id={name}
          name={name}
          checked={value}
          type='checkbox'
          onChange={this.handleChange}
        />
        <Box />
        {children}
      </Wrapper>
    )
  }
}

export default Checkbox
