import { combineReducers } from 'redux';
import teamsReducer from './teams';
import countriesReducer from './countries';
import gamesReducer from './games';
import goalsReducer from './goals';
import queryGoalsReducer from './queryGoals';
import peopleReducer from './people';

const generalReducer = combineReducers({
  teamsList: teamsReducer,
  countriesList: countriesReducer,
  gameList: gamesReducer,
  goalsList: goalsReducer,
  queryGoals: queryGoalsReducer,
  peopleList: peopleReducer,
});

export default generalReducer;
