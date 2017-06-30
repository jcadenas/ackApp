import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import * as APIUtil from './util/api_util';
import * as Actions from './actions/message_actions';




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

  window.APICreateMessage = APIUtil.createMessage;
  // window.APIDestroyChannel = APIUtil.destroyChannel;
  // window.APIFetchOneChannel = APIUtil.fetchOneChannel;
  window.APIFetchChannelMessages = APIUtil.fetchChannelMessages;
  // window.APIUpdateOneChannel = APIUtil.updateOneChannel;
  // window.APICreateSubscription = APIUtil.createSubscription;
  // window.APIDestroySubscription = APIUtil.destroySubscription;
  //
  window.ActionCreateMessage = Actions.createMessage;
  // window.ActionDestroyChannel = Actions.destroyChannel;
  // window.ActionFetchOneChannel = Actions.fetchOneChannel;
  window.ActionFetchChannelMessages = Actions.fetchChannelMessages;
  // window.ActionUpdateOneChannel = Actions.updateOneChannel;

  // window.ActionCreateSubscription = Actions.createSubscription;
  // window.ActionDestroySubscription = Actions.destroySubscription;

});
















// Bottom of File
