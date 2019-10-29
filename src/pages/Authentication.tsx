import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'

const Authentication = () => (
  <Router>
    <Switch>
      <Route exact component={Login} path='/' />
      <Route exact component={SignUp} path='/signup' />
    </Switch>
  </Router>
)

export default Authentication
