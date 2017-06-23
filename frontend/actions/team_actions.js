import * as APIUtil from '../util/api_util';

// REDUCER CONSTANTS -----------------------------

export const RECEIVE_ONE_TEAM = 'RECEIVE_ONE_TEAM';
export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
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






// ASYNC ACTION CREATORS -----------------------------

export const createTeam = (team) => (dispatch) => {
  return APIUtil.createTeam(team).then
};
