import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  teams: TeamsReducer
});

export default RootReducer;
