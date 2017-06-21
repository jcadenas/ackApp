import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as APIUtil from './util/api_util';
import * as Actions from './actions/session_actions';




document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');

  let store
  if (window.currentUser){
    const preloadedState = { session: { current_user: window.currentUser }}
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);




  // TESTING
  window.store = store;
  window.APICreateUser = APIUtil.createUser;
  window.APICreateSession = APIUtil.createSession;
  window.ActionCreateUser = Actions.createUser;
  window.ActionCreateSession = Actions.createSession;
  window.ActionDestroySession = Actions.destroySession;
  window.APIDestroySession = APIUtil.destroySession;
});
