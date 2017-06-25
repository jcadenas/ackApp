import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
// import * as APIUtil from './util/api_util';
// import * as Actions from './actions/team_actions';




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

  // window.APICreateTeam = APIUtil.createTeam;
  // window.APIDestroyTeam = APIUtil.destroyTeam;
  // window.APIFetchOneTeam = APIUtil.fetchOneTeam;
  // window.APIFetchUserTeams = APIUtil.fetchUserTeams;
  // window.APIUpdateOneTeam = APIUtil.updateOneTeam;
  // window.APICreateMembership = APIUtil.createMembership;
  // window.APIDestroyMembership = APIUtil.destroyMembership;
  //
  // window.ActionCreateTeam = Actions.createTeam;
  // window.ActionDestroyTeam = Actions.destroyTeam;
  // window.ActionFetchOneTeam = Actions.fetchOneTeam;
  // window.ActionFetchAllTeams = Actions.fetchUserTeams;
  // window.ActionUpdateOneTeam = Actions.updateOneTeam;
  //
  // window.ActionCreateMembership = Actions.createMembership;
  // window.ActionDestroyMembership = Actions.destroyMembership;

});
















// Bottom of File
