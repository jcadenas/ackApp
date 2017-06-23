import * as APIUtil from '../util/api_util';

// REDUCER CONSTANTS -----------------------------

export const RECEIVE_ONE_TEAM = 'RECEIVE_ONE_TEAM';
export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const DESTROYED_TEAM = 'DESTROYED_TEAM';




// OBJECT ACTION CREATORS -----------------------------


export const receiveOneTeam = (team) => {
  return ({
    type: RECEIVE_ONE_TEAM,
    team
  });
};

export const destroyedOneTeam = (team) => {
  return ({
    type: DESTROYED_TEAM,
    team
  });
};

export const receiveAllTeams = (teams) => {
  return ({
    type: RECEIVE_ALL_TEAMS,
    teams
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const updatedOneTeam = (team) => {
  return ({
    type: UPDATED_ONE_TEAM,
    team
  });
};




// ASYNC ACTION CREATORS -----------------------------

export const createTeam = (team) => (dispatch) => {
  return APIUtil.createTeam(team)
    .then(
      (resp) => dispatch(receiveOneTeam(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const destroyTeam = (team_id) => (dispatch) => {
  return APIUtil.destroyTeam(team_id)
    .then(
      (resp) => dispatch(destroyedOneTeam(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchOneTeam = (team_id) => (dispatch) => {
  return APIUtil.fetchOneTeam(team_id)
    .then(
      (resp) => dispatch(receiveOneTeam(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchAllTeams = () => (dispatch) => {
  return APIUtil.fetchAllTeams()
    .then(
      (resp) => dispatch(receiveAllTeams(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateOneTeam = (team) => (dispatch) => {
  return APIUtil.updateOneTeam(team)
    .then(
      (resp) => dispatch(receiveOneTeam(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
};





// End of File
