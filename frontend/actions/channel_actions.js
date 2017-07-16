import * as APIUtil from '../util/api_util';
import { collapseCreateChannelModal, collapseEditChannelModal } from './modal_actions';

// REDUCER CONSTANTS -----------------------------

export const RECEIVE_ONE_CHANNEL = 'RECEIVE_ONE_CHANNEL';
export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const DESTROYED_CHANNEL = 'DESTROYED_CHANNEL';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';




// OBJECT ACTION CREATORS -----------------------------


export const receiveOneChannel = (channel_user_team) => {
  return ({
    type: RECEIVE_ONE_CHANNEL,
    channel: channel_user_team.channel,
    user: channel_user_team.user,
    team: channel_user_team.team
  });
};

export const destroyedOneChannel = (channel_user_team) => {
  return ({
    type: DESTROYED_CHANNEL,
    channel: channel_user_team.channel,
    user: channel_user_team.user,
    team: channel_user_team.team
  });
};

export const receiveTeamChannels = (channels) => {
  return ({
    type: RECEIVE_ALL_CHANNELS,
    channels
  });
};

export const receiveChannelErrors = (errors) => {
  return ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  });
};

export const clearChannelErrors = () => {
  return ({
    type: CLEAR_CHANNEL_ERRORS,
    errors: []
  });
};




// ASYNC ACTION CREATORS -----------------------------

export const createChannel = (channel) => (dispatch) => {
  return APIUtil.createChannel(channel)
    .then(
      (resp) => dispatch(receiveOneChannel(resp)),
      (errors) => dispatch(receiveChannelErrors(errors.responseJSON)))
    .then(
      (resp) => dispatch(collapseCreateChannelModal())
    );
};

export const destroyChannel = (channelId) => (dispatch) => {
  return APIUtil.destroyChannel(channelId)
    .then(
      (resp) => dispatch(destroyedOneChannel(resp)),
      (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const fetchOneChannel = (channelId) => (dispatch) => {
  return APIUtil.fetchOneChannel(channelId)
    .then(
      (resp) => dispatch(receiveOneChannel(resp)),
      (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const fetchTeamChannels = (teamId) => (dispatch) => {
  return APIUtil.fetchTeamChannels(teamId)
    .then(
      (resp) => dispatch(receiveTeamChannels(resp)),
      (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
};

export const updateOneChannel = (channel) => (dispatch) => {
  return APIUtil.updateOneChannel(channel)
    .then(
      (resp) => dispatch(receiveOneChannel(resp)),
      (errors) => dispatch(receiveChannelErrors(errors.responseJSON)));
    // .then(
    //   () => dispatch(collapseEditChannelModal())
    // );
};





// End of File
