import goalsTestData from './goals';
import selectGoalsByMinute from '../../app/javascript/scripts/goalsClassify';

test('test invalid expression', () => {
  expect(selectGoalsByMinute(goalsTestData, 1, 'invalid expr')).toBe(null);
});
