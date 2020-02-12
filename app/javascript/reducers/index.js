import { combineReducers } from 'redux';
import teamsReducer from './teams';
import countriesReducer from './countries';
import gamesReducer from './games';
import goalsReducer from './goals';
import queryGoalsReducer from './queryGoals';

const generalReducer = combineReducers({
  teamsList: teamsReducer,
  countriesList: countriesReducer,
  gameList: gamesReducer,
  goalsList: goalsReducer,
  queryGoals: queryGoalsReducer,
});

export default generalReducer;
