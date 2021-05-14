import { Magician } from '../../Magician';
import { Daemon } from '../../Daemon';

test('проверка атаки персонажа на первую клетку по умолчанию', () => {
  const magician = new Magician('Merlin');
  magician.attack = 100;

  expect(magician.attack).toBe(100);
});

test('проверка атаки персонажа на 5 клетку', () => {
  const daemon = new Daemon('Lucifer');
  daemon.distanse = 5;
  daemon.attack = 100;

  expect(daemon.attack).toBe(60);
});

test('проверка атаки персонажа на 2 клетку при положительном параметре stoned', () => {
  const daemon = new Daemon('Lucifer');
  daemon.stoned = true;
  daemon.distanse = 2;
  daemon.attack = 100;

  expect(daemon.attack).toBe(85);
});

test('проверка атаки персонажа на 100 клеток при бессмыссленной атаке возврат значения 0', () => {
  const daemon = new Daemon('Lucifer');
  daemon.distanse = 100;
  daemon.attack = 100;

  expect(daemon.attack).toBe(0);
});
