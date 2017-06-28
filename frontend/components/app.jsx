import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Link } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Landing from './landing/landing';
import SessionWrapper from './session/session_wrapper';
import BaseContainer from './base/base_container';


const App = () => {
  debugger;
  return (
    <header>
      <switch>
        <Route exact path='/' component={Landing} />
        <switch>
          <ProtectedRoute path='/messages/:team_id/:channel_id' component={BaseContainer} />
          <ProtectedRoute path='/messages' component={BaseContainer} />
        </switch>
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
      </switch>
    </header>
  );
};

export default App;
