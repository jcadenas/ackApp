import {
  CREATED_ONE_MESSAGE,
  RECEIVE_CHANNEL_MESSAGES,
  RECEIVE_CHANNEL_ERRORS
  } from '../actions/message_actions';
import { merge } from 'lodash';

const defaultState = {
  entities: {},
  errors: []
};


const MessageReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type){

    case CREATED_ONE_MESSAGE: {
      newState = merge({}, state, {entities: { [action.message.id]: action.message}});
      return newState;
    }

    case RECEIVE_CHANNEL_MESSAGES: {
      newState = merge({}, state, {entities: action.messages});
      return newState;
    }

    case RECEIVE_CHANNEL_ERRORS: {
      const errors = action.errors;
      newState = merge({}, state, { errors });
      return newState;
    }

    // case CLEAR_ERRORS: {
    //   newState = Object.assign({}, state, { errors: action.errors });
    //   return newState;
    // }

    default:
      return state;
  }
};

export default MessageReducer;
