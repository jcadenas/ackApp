import * as APIUtil from '../util/api_util';
import { RECEIVE_ONE_CHANNEL } from './channel_actions';
import { collapseCreateSubscriptionModal } from './modal_actions';

// REDUCER CONSTANTS -----------------------------

export const CREATED_ONE_SUBSCRIPTION = 'CREATED_ONE_SUBSCRIPTION';
export const DESTROYED_SUBSCRIPTION = 'DESTROYED_SUBSCRIPTION';
export const RECEIVE_SUBSCRIPTION_ERRORS = 'RECEIVE_SUBSCRIPTION_ERRORS';




// OBJECT ACTION CREATORS -----------------------------

export const createdOneSubscription = (resp) => {
  return ({
    type: CREATED_ONE_SUBSCRIPTION,
    user: resp.user,
    channel: resp.channel
  });
};

  // Returns the channel that was left.
export const destroyedOneSubscription = (channel) => {
  return ({
    type: DESTROYED_SUBSCRIPTION,
    channel
  });
};

export const receiveSubscriptionErrors = (errors) => {
  return ({
    type: RECEIVE_SUBSCRIPTION_ERRORS,
    errors
  });
};



// ASYNC ACTION CREATORS -----------------------------

// takes a user_id & a channel_id
export const createSubscription = (subscription) => (dispatch) => {
  return APIUtil.createSubscription(subscription)
    .then(
      (resp) => dispatch(createdOneSubscription(resp)),
      (errors) => dispatch(receiveSubscriptionErrors(errors.responseJSON)));
};

  // ID of the channel that is being left.
export const destroySubscription = (channel_id) => (dispatch) => {
  return APIUtil.destroySubscription(channel_id)
    .then(
      (resp) => dispatch(destroyedOneSubscription(resp)));
};





// Bottom of File
