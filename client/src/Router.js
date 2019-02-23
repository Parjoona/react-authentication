import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home';
import Signup from './components/authentication/Signup';
import Feature from './components/Feature';
import Signout from './components/authentication/Signout';
import Signin from './components/authentication/Signin';

// Redux form is not up to date with react router
const reduxFormFix = () => (
  <Signup/>
)

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={reduxFormFix} />
    <Route path="/Signin" component={Signin} />
    <Route path="/signout" component={Signout} />
    <Route path="/feature" component={Feature} />
  </Switch>
)