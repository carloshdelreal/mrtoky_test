import { combineReducers } from 'redux';
import teamsReducer from './teams';
import countriesReducer from './countries';
import gamesReducer from './games';
import goalsReducer from './goals';

const generalReducer = combineReducers({
  teamsList: teamsReducer,
  countriesList: countriesReducer,
  gameList: gamesReducer,
  goalsList: goalsReducer,
});

export default generalReducer;
