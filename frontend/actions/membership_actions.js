import * as APIUtil from '../util/api_util';
import { RECEIVE_ONE_TEAM } from './team_actions';

// REDUCER CONSTANTS -----------------------------

export const CREATED_ONE_MEMBERSHIP = 'CREATED_ONE_MEMBERSHIP';
export const DESTROYED_MEMBERSHIP = 'DESTROYED_MEMBERSHIP';




// OBJECT ACTION CREATORS -----------------------------

export const createdOneMembership = (team) => {
  return ({
    type: RECEIVE_ONE_TEAM,
    team
  });
};

  // Returns the team that was left.
export const destroyedOneMembership = (team) => {
  return ({
    type: DESTROYED_MEMBERSHIP,
    team
  });
};



// ASYNC ACTION CREATORS -----------------------------

export const createMembership = (membership) => (dispatch) => {
  return APIUtil.createMembership(membership)
    .then(
      (resp) => dispatch(createdOneMembership(resp)));
};

  // ID of the Team that is being left.
export const destroyMembership = (team_id) => (dispatch) => {
  return APIUtil.destroyMembership(team_id)
    .then(
      (resp) => dispatch(destroyedOneMembership(resp)));
};





// Bottom of File
