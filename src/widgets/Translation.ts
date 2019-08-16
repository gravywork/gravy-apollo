import { withState } from '@/state'
import { selectCode } from '@/state/language'

import { translate } from '@/util/i18n'

const Translation = props => translate(props)

export default withState(state => ({
  language: selectCode(state)
}))(Translation)
