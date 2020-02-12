import getPeopleById from '../../app/javascript/scripts/personsClassify';
import peopleData from './people';

test('get person', () => {
  expect(getPeopleById(peopleData, 1).name).toBe('Marcelo');
});

test('person does not exists', () => {
  expect(getPeopleById(peopleData, 0)).toBe(null);
});

