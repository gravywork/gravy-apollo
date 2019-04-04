import '@babel/polyfill'

import { addDecorator, configure } from '@storybook/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import theme from '@/theme'

import { StateProvider } from '@/state'

import '@/icons'

const req = require.context('../stories', true, /\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <StateProvider>
      <GlobalStyle />
      <Router>
        {story()}
      </Router>
    </StateProvider>
  </ThemeProvider>
))

configure(loadStories, module)

