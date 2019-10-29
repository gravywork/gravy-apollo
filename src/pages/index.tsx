import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' render={() => 'Hello World'} />
    </Switch>
  </Router>
)

export default hot(App)
