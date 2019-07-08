import styled from 'styled-components'

const Input = styled.input`
  padding: 0.625rem 1.125rem;
  width: 100%;

  background-color: white;
  border: 1px solid ${p => p.theme.black8};
  border-radius: 3px;
  outline: none;

  font-family: ${p => p.theme.font};
  font-size: 0.875rem;
  line-height: 1;

  &:focus {
    border-color: ${p => p.theme.black88};
    outline: 1px solid ${p => p.theme.black88};
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.black32};
  }
`

export default Input
