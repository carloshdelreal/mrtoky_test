import { combineReducers } from 'redux';
import doctorsReducer from './doctor';

const generalReducer = combineReducers({
  doctors: doctorsReducer,
});

export default generalReducer;
