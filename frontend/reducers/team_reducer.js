import {
  RECEIVE_ONE_TEAM,
  RECEIVE_ALL_TEAMS,
  RECEIVE_ERRORS,
  DESTROYED_TEAM,
  CLEAR_ERRORS
} from '../actions/team_actions';
import {
  DESTROYED_MEMBERSHIP
} from '../actions/membership_actions';
import { DESTROYED_SESSION } from '../actions/session_actions';
import { RECEIVE_ONE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

const defaultState = {
  entities: {},
  errors: []
};


const TeamReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type){

    case RECEIVE_ONE_TEAM: {
      newState = merge({}, state, {entities: { [action.team.id]: action.team}});
      return newState;
    }

    // AKA created a channel
    case RECEIVE_ONE_CHANNEL: {
      newState = merge({}, state, {entities: { [action.team.id]: action.team}});
      return newState;
    }

    case RECEIVE_ALL_TEAMS: {
      newState = merge({}, state, {entities: action.teams});
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

    case DESTROYED_TEAM: {
      newState = merge({}, state);
      delete newState.entities[action.team.id];
      return newState;
    }

    case DESTROYED_SESSION: {
      return defaultState;
    }

    case DESTROYED_MEMBERSHIP: {
      newState = merge({}, state);
      delete newState.entities[action.team.id];
      return newState;
    }

    default:
      return state;
  }
};

export default TeamReducer;
