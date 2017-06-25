import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamReducer from './team_reducer';
import ModalReducer from './modal_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  modals: ModalReducer,
  teams: TeamReducer
});

export default RootReducer;
