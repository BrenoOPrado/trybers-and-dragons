import Race from './Race';

export default class Dwarf
  extends Race {
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instance += 1;
  }

  get maxLifePoints(): number {
    return 80;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }
}