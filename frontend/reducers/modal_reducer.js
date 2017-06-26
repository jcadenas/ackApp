import {
  EXPAND_EDIT_TEAM_MODAL,
  EXPAND_CREATE_TEAM_MODAL,
  COLLAPSE_EDIT_TEAM_MODAL,
  COLLAPSE_CREATE_TEAM_MODAL,
  EXPAND_CREATE_MEMBERSHIP_MODAL,
  COLLAPSE_CREATE_MEMBERSHIP_MODAL
 } from '../actions/modal_actions';
import { merge } from 'lodash';

// MODAL CONSTANTS ----------------------------------------
export const EDIT_TEAM_MODAL = 'EDIT_TEAM_MODAL';
export const CREATE_TEAM_MODAL = 'CREATE_TEAM_MODAL';
export const CREATE_MEMBERSHIP_MODAL = 'CREATE_MEMBERSHIP_MODAL';

const defaultState = {};


const ModalReducer = (state = defaultState, action) => {
  let newState;
  let newBoolean;
  switch(action.type){

    // ACTION TYPE IS BEING STORED IN STATE

    case EXPAND_EDIT_TEAM_MODAL: {
      newState = merge({}, state, {EDIT_TEAM_MODAL: true});
      return newState;
    }

    case COLLAPSE_EDIT_TEAM_MODAL: {
      newState = merge({}, state, {EDIT_TEAM_MODAL: false});
      return newState;
    }

    case EXPAND_CREATE_TEAM_MODAL: {
      newState = merge({}, state, {CREATE_TEAM_MODAL: true});
      return newState;
    }

    case COLLAPSE_CREATE_TEAM_MODAL: {
      newState = merge({}, state, {CREATE_TEAM_MODAL: false});
      return newState;
    }

    case EXPAND_CREATE_MEMBERSHIP_MODAL: {
      newState = merge({}, state, {CREATE_MEMBERSHIP_MODAL: true});
      return newState;
    }

    case COLLAPSE_CREATE_MEMBERSHIP_MODAL: {
      newState = merge({}, state, {CREATE_MEMBERSHIP_MODAL: false});
      return newState;
    }


    default:
      return state;
  }
};

export default ModalReducer;
