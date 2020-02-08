const LOAD_TEAMS = 'LOAD_TEAMS';
const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
const LOAD_GAMES = 'LOAD_GAMES';

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

export {
  loadTeams,
  loadCountries,
  loadGames,
};
