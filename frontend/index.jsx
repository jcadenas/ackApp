import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as APIUtil from './util/api_util';
import * as Actions from './actions/session_actions';




document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  const store = configureStore();



  // TESTING
  window.store = store;
  window.APICreateUser = APIUtil.createUser;
  window.APICreateSession = APIUtil.createSession;
  window.ActionCreateUser = Actions.createUser;
  window.ActionCreateSession = Actions.createSession;
  window.ActionDestroySession = Actions.destroySession;
  window.APIDestroySession = APIUtil.destroySession;



  ReactDOM.render(<Root store={store} />, root);
});
