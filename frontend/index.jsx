import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as APIUtil from './util/api_util';
import * as Actions from './actions/subscription_actions';




document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');

  let store;
  if (window.currentUser){
    const preloadedState = { session: { current_user: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);




  // TESTING

  window.store = store;

  window.APICreateChannel = APIUtil.createChannel;
  window.APIDestroyChannel = APIUtil.destroyChannel;
  window.APIFetchOneChannel = APIUtil.fetchOneChannel;
  window.APIFetchTeamChannels = APIUtil.fetchTeamChannels;
  window.APIUpdateOneChannel = APIUtil.updateOneChannel;
  window.APICreateSubscription = APIUtil.createSubscription;
  window.APIDestroySubscription = APIUtil.destroySubscription;
  //
  window.ActionCreateChannel = Actions.createChannel;
  window.ActionDestroyChannel = Actions.destroyChannel;
  window.ActionFetchOneChannel = Actions.fetchOneChannel;
  window.ActionFetchTeamChannels = Actions.fetchTeamChannels;
  window.ActionUpdateOneChannel = Actions.updateOneChannel;

  window.ActionCreateSubscription = Actions.createSubscription;
  window.ActionDestroySubscription = Actions.destroySubscription;

});
















// Bottom of File
