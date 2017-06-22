import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import Landing from './landing/landing';
import SessionWrapper from './session/session_wrapper';

const App = () => {
  return (
    <header>
      <switch>
        <AuthRoute exact path='/' component={Landing} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
      </switch>
    </header>
  );
};

export default App;
