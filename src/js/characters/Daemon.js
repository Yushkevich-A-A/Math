import { MathCharacter } from './MathAttack/MathCharacter';

export class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'Daemon');

    this.attack = 10;
    this.defence = 40;
  }
}
