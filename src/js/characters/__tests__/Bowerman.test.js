import { Bowerman } from '../Bowerman';

const expected = {
  name: 'Robin Hood',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('correct creating bowman', () => {
  const received = new Bowerman('Robin Hood');

  expect(received).toEqual(expected);
});

test('correct creating bowman without error', () => {
  expect(() => new Bowerman('Robin Hood')).not.toThrowError();
});
