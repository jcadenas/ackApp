import * as APIUtil from '../util/api_util';

// REDUCER CONSTANTS -----------------------------

export const CREATED_ONE_MEMBERSHIP = 'CREATED_ONE_MEMBERSHIP';
export const DESTROYED_MEMBERSHIP = 'DESTROYED_MEMBERSHIP';



// OBJECT ACTION CREATORS -----------------------------

export const createdOneMembership = (membership) => {
  return ({
    type: CREATED_ONE_MEMBERSHIP,
    membership
  });
};

export const destroyedOneMembership = (membership) => {
  return ({
    type: DESTROYED_MEMBERSHIP,
    membership
  });
};



// ASYNC ACTION CREATORS -----------------------------

export const createMembership = (membership) => (dispatch) => {
  return APIUtil.createMembership(membership)
    .then(
      (resp) => dispatch(createdOneMembership(resp)));
};

export const destroyMembership = (membership_id) => (dispatch) => {
  return APIUtil.destroyMembership(membership_id)
    .then(
      (resp) => dispatch(destroyedOneMembership(resp)));
};





// Bottom of File
