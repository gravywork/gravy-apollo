import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Grommet } from 'grommet'

import Home from '@/pages/Home'
import GlobalStyle from '@/components/GlobalStyle'

import LanguageDetector from '@/widgets/LanguageDetector'
import ModalRoot from '@/widgets/ModalRoot'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import theme from '@/theme'

import { StateProvider } from '@/state'

const client = new ApolloClient({
  uri: 'https://dog-graphql-api.glitch.me/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <Grommet theme={theme}>
      <StateProvider>
        <GlobalStyle />
        <SnackbarRoot />
        <Router>
          <LanguageDetector />
          <ModalRoot />
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </StateProvider>
    </Grommet>
  </ApolloProvider>
)

export default hot(App)
