import * as APIUtil from '../util/api_util';

// REDUCER CONSTANTS -----------------------------

export const CREATED_ONE_MESSAGE = 'CREATED_ONE_MESSAGE';
export const RECEIVE_CHANNEL_MESSAGES = 'RECEIVE_CHANNEL_MESSAGES';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';



// OBJECT ACTION CREATORS -----------------------------


export const createdOneMessage = (message) => {
  return ({
    type: CREATED_ONE_MESSAGE,
    message
  });
};

export const receiveChannelMessages = (messages) => {
  return ({
    type: RECEIVE_CHANNEL_MESSAGES,
    messages
  });
};

export const receiveMessageErrors = (errors) => {
  return ({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  });
};




// ASYNC ACTION CREATORS -----------------------------

export const createMessage = (message) => (dispatch) => {
  return APIUtil.createMessage(message)
    .then(
      (resp) => dispatch(createdOneMessage(resp)),
      (errors) => dispatch(receiveMessageErrors(errors.responseJSON)));
};

export const fetchChannelMessages = (channelId) => (dispatch) => {
  return APIUtil.fetchChannelMessages(channelId)
    .then(
      (resp) => dispatch(receiveChannelMessages(resp)),
      (errors) => dispatch(receiveMessageErrors(errors.responseJSON)));
};
