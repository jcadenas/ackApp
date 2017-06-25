import { EDIT_TEAM_TOGGLE, CREATE_TEAM_TOGGLE } from '../actions/modal_actions';
import { merge } from 'lodash';

const defaultState = {};


const ModalReducer = (state = defaultState, action) => {
  let newState;
  let newBoolean;
  switch(action.type){

    // ACTION TYPE IS BEING STORED IN STATE

    case EDIT_TEAM_TOGGLE: {
      newBoolean = !Boolean(state[action.type])
      newState = merge({}, state, {[action.type]: newBoolean});
      return newState;
    }

    case CREATE_TEAM_TOGGLE: {
      newBoolean = !Boolean(state[action.type])
      newState = merge({}, state, {[action.type]: newBoolean});
      return newState;
    }

    default:
      return state;
  }
};

export default ModalReducer;
