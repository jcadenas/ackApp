import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';





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

});
















// Bottom of File
