import styled from 'styled-components'

const ActionRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${p => p.justify};

  > * + * {
    margin-left: ${p => p.gutter}rem;
  }
`

ActionRow.defaultProps = {
  gutter: 1,
  justify: 'flex-start'
}

export default ActionRow
