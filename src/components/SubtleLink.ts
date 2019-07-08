import { Link as _Link } from 'react-router-dom'
import styled from 'styled-components'

import Link from '@/components/Link'

const SubtleLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

SubtleLink.defaultProps = {
  as: _Link,
  hoverColor: undefined
}

export default SubtleLink
