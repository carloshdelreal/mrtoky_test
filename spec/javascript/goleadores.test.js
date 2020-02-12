import goalsTestData from './goals';
import peopleData from './people';
import goleadoresByTeam from '../../app/javascript/scripts/goleadoresClassify';

test('goleadores by team', () => {
  expect(goleadoresByTeam(goalsTestData).length).toBe(32);
});
