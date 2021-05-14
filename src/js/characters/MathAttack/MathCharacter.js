import { Character } from '../tamplate_character/Character';

export class MathCharacter extends Character {
  constructor(...args) {
    super(...args);
    this._stoned = false;
    this.distanse = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const baseAttackValue = this._attack - this._attack * ((this.distanse - 1) * 0.1);
    if (baseAttackValue < 0) {
      return 0;
    }

    return (this.stoned)
      ? baseAttackValue - Math.round(Math.log(this.distanse)) * 5
      : baseAttackValue;
  }

  set attack(value) {
    this._attack = value;
  }
}
