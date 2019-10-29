import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Grommet, grommet } from 'grommet'
import theme from '../theme'

import Home from '@/pages/Home'

import { StateProvider } from '@/state'

const client = new ApolloClient({
  uri: 'https://dog-graphql-api.glitch.me/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <Grommet theme={theme} full>
      <StateProvider>
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </StateProvider>
    </Grommet>
  </ApolloProvider>
)

export default hot(App)
