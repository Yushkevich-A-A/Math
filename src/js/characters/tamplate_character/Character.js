export class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;

    this.validateName(name);
    this.validateType(type);
  }

  validateName(data) {
    if (data.length < 2 || data.length > 10) {
      throw new Error('имя персонажа должно быть не меньше 2 и не больше 1 символов');
    }
    this.name = data;
  }

  validateType(data) {
    switch (data) {
      case 'Bowman':
      case 'Swordsman':
      case 'Magician':
      case 'Daemon':
      case 'Undead':
      case 'Zombie':
        this.type = data;
        break;
      default:
        throw new Error('неверно указан тип персонажа');
    }
  }
}
