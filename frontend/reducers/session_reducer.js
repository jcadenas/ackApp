import {
  RECEIVE_ONE_USER,
  RECEIVE_ERRORS,
  DESTROYED_SESSION,
  CLEAR_ERRORS
  } from '../actions/session_actions';
import { RECEIVE_ONE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_ONE_TEAM } from '../actions/team_actions';
import { CREATED_ONE_SUBSCRIPTION } from '../actions/subscription_actions';
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
      const errors = action.errors;
      newState = merge({}, state, { errors });
      return newState;
    }

    case CLEAR_ERRORS: {
      newState = Object.assign({}, state, { errors: action.errors });
      return newState;
    }

    case DESTROYED_SESSION: {
      newState = merge({}, state, {current_user: null});
      return newState;
    }

    case CREATED_ONE_SUBSCRIPTION: {
      newState = Object.assign({}, state, { current_user: action.user });
      return newState;
    }
    // AKA created a channel
    case RECEIVE_ONE_CHANNEL: {
      newState = Object.assign({}, state, { current_user: action.user });
      return newState;
    }

    case RECEIVE_ONE_TEAM: {
      newState = Object.assign({}, state, { current_user: action.user });
      return newState;
    }

    default:
      return state;
  }
};

export default SessionReducer;
