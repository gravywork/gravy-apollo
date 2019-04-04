import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import theme from '@/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    Hello, world!
  </ThemeProvider>
)

export default hot(App)
