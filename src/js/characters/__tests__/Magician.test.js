import { Magician } from '../Magician';

const expected = {
  name: 'Merlin',
  type: 'Magician',
  health: 100,
  level: 1,
  _attack: 10,
  defence: 40,
  distanse: 1,
  _stoned: false,
};

test('correct creating Magician', () => {
  const received = new Magician('Merlin');

  expect(received).toEqual(expected);
});

test('correct creating Magician without error', () => {
  expect(() => new Magician('Merlin')).not.toThrowError();
});
