import {
  RECEIVE_ONE_CHANNEL,
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL_ERRORS,
  DESTROYED_CHANNEL,
  CLEAR_CHANNEL_ERRORS
} from '../actions/channel_actions';
import { CREATED_ONE_SUBSCRIPTION, DESTROYED_SUBSCRIPTION } from '../actions/subscription_actions';
import { RECEIVE_ONE_TEAM } from '../actions/team_actions';
import { DESTROYED_SESSION } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
  entities: {},
  errors: []
};


const ChannelReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type){

    case RECEIVE_ONE_CHANNEL: {
      newState = merge({}, state, {entities: { [action.channel.id]: action.channel}});
      return newState;
    }

    case RECEIVE_ALL_CHANNELS: {
      newState = merge({}, state, {entities: action.channels});
      return newState;
    }

    case RECEIVE_CHANNEL_ERRORS: {
      const errors = action.errors;
      newState = merge({}, state, { errors });
      return newState;
    }

    case CLEAR_CHANNEL_ERRORS: {
      newState = Object.assign({}, state, { errors: action.errors });
      return newState;
    }

    case DESTROYED_CHANNEL: {
      newState = merge({}, state);
      delete newState.entities[action.channel.id];
      return newState;
    }

    case DESTROYED_SESSION: {
      return defaultState;
    }

    // NOTE: Thought is, leaving a channel shouldnt remove it from the
    // channel slice of state. Only from the user's channel ids
    // case DESTROYED_SUBSCRIPTION: {
    //   debugger;
    //   newState = merge({}, state);
    //   delete newState.entities[action.channel.id];
    //   return newState;
    // }

    case CREATED_ONE_SUBSCRIPTION: {
      newState = Object.assign({}, state, {entities: { [action.channel.id]: action.channel}});
      return newState;
    }

    case RECEIVE_ONE_TEAM: {
      newState = Object.assign({}, state, {entities: { [action.channel.id]: action.channel}});
      return newState;
    }

    default:
      return state;
  }
};

export default ChannelReducer;
