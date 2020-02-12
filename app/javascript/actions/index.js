const LOAD_TEAMS = 'LOAD_TEAMS';
const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
const LOAD_GAMES = 'LOAD_GAMES';
const LOAD_GOALS = 'LOAD_GOALS';
const QUERY_GOALS = 'QUERY_GOALS';
const LOAD_PEOPLE = 'LOAD_PEOPLE';
const LOAD_ROUNDS = 'LOAD_ROUNDS';
const LOAD_PARTICIPANTS = 'LOAD_PARTICIPANTS';
const LOAD_PDICT = 'LOAD_PDICT';

const loadTeams = teams => ({
  type: LOAD_TEAMS,
  payload: teams,
});

const loadCountries = countries =>({
  type: LOAD_COUNTRIES,
  payload: countries,
});

const loadGames = games => ({
  type: LOAD_GAMES,
  payload: games,
});

const loadGoals = goals => ({
  type: LOAD_GOALS,
  payload: goals,
});

const queryGoals = goals => ({
  type: QUERY_GOALS,
  payload: goals,
});

const loadPeople = people => ({
  type: LOAD_PEOPLE,
  payload: people,
});

const loadRounds = rounds => ({
  type: LOAD_ROUNDS,
  payload: rounds,
});

const loadParticipants = participants => ({
  type: LOAD_PARTICIPANTS,
  payload: participants,
});

const loadPDict = people => ({
  type: LOAD_PDICT,
  payload: people,
});

export {
  loadTeams,
  loadCountries,
  loadGames,
  loadGoals,
  queryGoals,
  loadPeople,
  loadRounds,
  loadParticipants,
  loadPDict,
};
