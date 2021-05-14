import { Daemon } from '../Daemon';

const expected = {
  name: 'Lucifer',
  type: 'Daemon',
  health: 100,
  level: 1,
  _attack: 10,
  defence: 40,
  distanse: 1,
  _stoned: false,
};

test('correct creating daemon', () => {
  const received = new Daemon('Lucifer');

  expect(received).toEqual(expected);
});

test('correct creating daemon without error', () => {
  expect(() => new Daemon('Lucifer')).not.toThrowError();
});
