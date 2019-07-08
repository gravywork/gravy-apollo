import styled, { css } from 'styled-components'

import Icon from '@/components/Icon'

const blockStyles = css`
  width: 100%;
`

const largeStyles = css`
  padding: 1rem 1.5rem;
  font-size: 1rem;
`

const smallStyles = css`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;

  ${Icon} {
    margin-right: 0.675rem;
  }
`

interface IButtonProps {
  bgColor?: string
  block?: boolean
  color?: string
  disabledColor?: string
  hoverColor?: string
  large?: boolean
  small?: boolean
}

const Button = styled.button<IButtonProps>`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.625rem 1.125rem;

  background-color: ${p => p.theme[p.bgColor]};
  border: 1px solid transparent;
  border-radius: 3px;
  color: ${p => p.theme[p.color]};
  cursor: pointer;
  outline: none;
  overflow: hidden;

  font-family: ${p => p.theme.fontsans};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;

  &:focus {
    box-shadow: 0 0 1px 4px ${p => p.theme.primary100};
  }

  &:hover {
    background-color: ${p => p.theme[p.hoverColor]};
    color: ${p => p.theme[p.color]};
  }

  &[disabled] {
    background-color: ${p => p.theme[p.disabledColor]};
    cursor: not-allowed;
  }

  ${Icon} {
    margin-right: 0.875rem;
  }

  ${p => p.block && blockStyles};
  ${p => p.large && largeStyles};
  ${p => p.small && smallStyles};
`

Button.defaultProps = {
  bgColor: 'primary700',
  color: 'white',
  disabledColor: 'primary300',
  hoverColor: 'primary800',
  type: 'button'
}

export default Button
