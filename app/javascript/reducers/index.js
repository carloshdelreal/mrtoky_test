import { combineReducers } from 'redux';
import teamsReducer from './teams';
import countriesReducer from './countries';
import gamesReducer from './games';

const generalReducer = combineReducers({
  teamsList: teamsReducer,
  countriesList: countriesReducer,
  gameList: gamesReducer,
});

export default generalReducer;
