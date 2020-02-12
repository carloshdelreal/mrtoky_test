const LOAD_TEAMS = 'LOAD_TEAMS';
const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
const LOAD_GAMES = 'LOAD_GAMES';
const LOAD_GOALS = 'LOAD_GOALS';
const QUERY_GOALS = 'QUERY_GOALS';

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

export {
  loadTeams,
  loadCountries,
  loadGames,
  loadGoals,
  queryGoals,
};
