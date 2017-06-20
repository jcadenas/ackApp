import { RECEIVE_ONE_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  current_user: null,
  errors: []
};


const SessionReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type){

    case RECEIVE_ONE_USER: {
      newState = merge({}, state, {current_user: action.user});
      return newState;
    }

    case RECEIVE_ERRORS: {
      newState = merge({}, state, {errors: action.errors});
      return newState;
    }

    default:
      return state;
  }
};

export default SessionReducer;
