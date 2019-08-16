import qs from 'query-string'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { setLanguage } from '@/state/language'

import { Language } from '@/util/enums'

const validLanguages = [
  Language.ENGLISH
]

class LanguageDetector extends Component {
  public componentDidMount () {
    const { lang } = qs.parse(this.props.location.search)

    if (lang && validLanguages.includes(lang)) {
      setLanguage(lang)
    }
  }

  public render () {
    return null
  }
}

export default withRouter(LanguageDetector)
