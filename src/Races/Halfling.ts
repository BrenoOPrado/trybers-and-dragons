import Race from './Race';

export default class Halfling
  extends Race {
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instance += 1;
  }

  get maxLifePoints(): number {
    return 60;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }
}