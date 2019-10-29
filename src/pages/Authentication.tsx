import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box } from 'grommet'

import Login from './Login'
import SignUp from './SignUp'

const Wrapper = ({ children }: any) => (
  <Box
    height='100vh'
    width='100vw'
  >
    <Box
      width='500px'
      margin='auto'
    >
      {children}
    </Box>
  </Box>
)

const Authentication = () => (
  <Wrapper>
    <Router>
      <Switch>
        <Route exact component={Login} path='/' />
        <Route exact component={SignUp} path='/signup' />
      </Switch>
    </Router>
  </Wrapper>
)

export default Authentication
