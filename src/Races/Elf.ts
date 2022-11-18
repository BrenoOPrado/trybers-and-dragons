import Race from './Race';

export default class Elf
  extends Race {
  private static _instance = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instance += 1;
  }

  get maxLifePoints(): number {
    return 99;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }
}