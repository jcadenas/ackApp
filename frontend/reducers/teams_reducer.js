import {
  RECEIVE_ONE_TEAM,
  RECEIVE_ALL_TEAMS,
  RECEIVE_ERRORS,
  DESTROYED_TEAM
} from '../actions/team_actions';
import { DESTROYED_SESSION } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  entities: {},
  errors: []
};


const TeamsReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type){

    case RECEIVE_ONE_TEAM: {
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

    case DESTROYED_TEAM: {
      newState = merge({}, state);
      delete newState.entities[action.team.id];
      return newState;
    }

    case DESTROYED_SESSION: {
      return defaultState;
    }

    default:
      return state;
  }
};

export default TeamsReducer;
