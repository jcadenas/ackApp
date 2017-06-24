import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Landing from './landing/landing';
import SessionWrapper from './session/session_wrapper';
import BaseWrapperContainer from './base/base_wrapper_container';


const App = () => {
  return (
    <header>
      <switch>
        <Route exact path='/' component={Landing} />
        <ProtectedRoute path='/messages' component={BaseWrapperContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
      </switch>
    </header>
  );
};

export default App;
