import styled, { css } from 'styled-components'

const fitStyles = css`
  > * {
    flex: 1;
  }
`

const ActionRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${p => p.justify};

  > * + * {
    margin-left: ${p => p.gutter}rem;
  }

  ${p => p.fit && fitStyles}
`

ActionRow.defaultProps = {
  gutter: 1,
  justify: 'flex-start'
}

export default ActionRow
