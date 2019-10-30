import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  </Router>
)

export default hot(App)
