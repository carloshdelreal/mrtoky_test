const goleadoresByTeam = (goalsList) => {
  const goalsCountByPlayer = {};
  for (let i = 0; i < goalsList.length; i += 1) {
    const goal = goalsList[i];
    if (goalsCountByPlayer[goal.person_id] === undefined) {
      goalsCountByPlayer[goal.person_id] = [1, goal.team_id];
    } else {
      goalsCountByPlayer[goal.person_id][0] += 1;
    }
  }

  const topScorersByteam = {};
  const players = Object.keys(goalsCountByPlayer);

  players.forEach((player) => {
    const [goals, team_id] = goalsCountByPlayer[player];
    if (topScorersByteam[team_id] === undefined) {
      topScorersByteam[team_id] = [player, goals];
    } else if (topScorersByteam[team_id][1] < goals) {
      topScorersByteam[team_id] = [player, goals];
    }
  });

  const teams = Object.keys(topScorersByteam);
  const teamsList = [];
  teams.forEach((element) => {
    const [player, goals] = topScorersByteam[element];
    teamsList.push({ team: element, player, goals });
  });
  return teamsList;

}

export default goleadoresByTeam;
