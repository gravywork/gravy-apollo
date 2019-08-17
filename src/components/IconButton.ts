import styled from 'styled-components'

const IconButton = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${p => p.circumference || p.size * 3}rem;
  width: ${p => p.circumference || p.size * 3}rem;

  background-color: ${p => p.theme[p.bgColor]};
  border: none;
  border-radius: 100%;
  color: ${p => p.theme[p.color]};
  cursor: pointer;
  outline: none;

  font-size: ${p => p.size}rem;

  &:hover {
    background-color: ${p => p.theme[p.hoverColor]};
  }

  &[disabled] {
    color: ${p => p.theme[p.disabledColor]};
    cursor: not-allowed;
  }
`

IconButton.defaultProps = {
  bgColor: 'transparent',
  circumference: null,
  color: 'black72',
  disabledColor: 'black48',
  hoverColor: 'black8',
  size: 1
}

export default IconButton
