import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import ModalRoot from '@/widgets/ModalRoot'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import theme from '@/theme'
import { StateProvider } from '@/state'

const App = () => (
  <ThemeProvider theme={theme}>
    <StateProvider>
      <GlobalStyle />
      <ModalRoot />
      <SnackbarRoot />
      Hello, world!
    </StateProvider>
  </ThemeProvider>
)

export default hot(App)
