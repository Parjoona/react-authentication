import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home';
import Signup from './components/Signup';

// Redux form is not up to date with react router
const reduxFormFix = () => (
  <Signup/>
)

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={reduxFormFix} />
  </Switch>
)