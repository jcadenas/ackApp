import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Landing from './landing/landing';
import SessionWrapper from './session/session_wrapper';
import BaseContainer from './base/base_container';


const App = () => {
  return (
    <header>
      <Route exact path='/' component={Landing} />
      <ProtectedRoute path='/messages' component={BaseContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
    </header>
  );
};

export default App;
