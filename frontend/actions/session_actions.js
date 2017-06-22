import * as APIUtil from '../util/api_util';

export const RECEIVE_ONE_USER = 'RECEIVE_ONE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const DESTROYED_SESSION = 'DESTROY_ONE_SESSION';

// TODO: Likely need to change how I'm passing user
export const receiveOneUser = (user) => {
  return ({
    type: RECEIVE_ONE_USER,
    user
  });
};

// TODO: Likely need to change how I'm passing errors with key (errors.responseJSON)
export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const clearErrors = (errors) => {
  return ({
    type: CLEAR_ERRORS,
    errors
  });
};

export const destroyedSession = () => {
  return ({
    type: DESTROYED_SESSION
  });
};

export const createUser = (user) => (dispatch) => {
  return (
    APIUtil.createUser(user).then(
      (resp) => dispatch(receiveOneUser(resp)),
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON))
      }
    )
  );
};

export const createSession = (user) => (dispatch) => {
  return (
    APIUtil.createSession(user).then(
      (resp) => dispatch(receiveOneUser(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const destroySession = () => (dispatch) => {
  return (
    APIUtil.destroySession().then(
      (resp) => dispatch(destroyedSession(resp)),
      (errors) => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};
