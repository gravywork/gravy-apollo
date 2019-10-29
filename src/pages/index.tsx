import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grommet, grommet } from 'grommet'
import theme from '../theme'

import Home from '@/pages/Login'

import { StateProvider } from '@/state'

const App = () => (
  <Grommet theme={theme} full>
    <StateProvider>
    <Router>
        <Switch>
        <Route path='/' component={Home} />
        </Switch>
    </Router>
    </StateProvider>
  </Grommet>
)

export default hot(App)
