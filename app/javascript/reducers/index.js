import { combineReducers } from 'redux';
import teamsReducer from './teams';
import countriesReducer from './countries';
import gamesReducer from './games';
import goalsReducer from './goals';
import queryGoalsReducer from './queryGoals';
import peopleReducer from './people';
import roundsReducer from './rounds';
import participantsReducer from './participants';
import pDictReducer from './peopledict';

const generalReducer = combineReducers({
  teamsList: teamsReducer,
  countriesList: countriesReducer,
  gameList: gamesReducer,
  goalsList: goalsReducer,
  queryGoals: queryGoalsReducer,
  peopleList: peopleReducer,
  roundsList: roundsReducer,
  participantsList: participantsReducer,
  peopleDict: pDictReducer,
});

export default generalReducer;
