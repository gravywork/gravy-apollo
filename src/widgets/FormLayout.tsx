import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${p => p.padding}vh 0;
`

const FormColumn = styled.div`
  max-width: 35rem;
  width: 100%;
`

const FormLayout = ({ children, padding = 25 }) => (
  <PageWrapper padding={padding}>
    <FormColumn>
      {children}
    </FormColumn>
  </PageWrapper>
)

export default FormLayout
