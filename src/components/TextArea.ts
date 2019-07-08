import styled from 'styled-components'

import Input from '@/components/Input'

const TextArea = styled(Input).attrs({
  as: 'textarea',
  rows: 3
})`
  line-height: 1.5;
`

export default TextArea
