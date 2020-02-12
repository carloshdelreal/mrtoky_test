import goalsTestData from './goals';
import selectGoalsByMinute from '../../app/javascript/scripts/goalsClassify';

test('test invalid expression', () => {
  expect(selectGoalsByMinute(goalsTestData, 1, 'invalid expr')).toBe(null);
});

test('goals in minute 1', () => {
  expect(selectGoalsByMinute(goalsTestData, 1, '=').length).toBe(1);
});

test('goals in minute 90', () => {
  expect(selectGoalsByMinute(goalsTestData, 90, '=').length).toBe(14);
});

test('goals before minute 1', () => {
  expect(selectGoalsByMinute(goalsTestData, 1, '<').length).toBe(0);
});

test('goals before minute 2', () => {
  expect(selectGoalsByMinute(goalsTestData, 2, '<').length).toBe(1);
});

test('goals after minute 90', () => {
  expect(selectGoalsByMinute(goalsTestData, 90, '>').length).toBe(8);
});
