import Race from './Race';

export default class Orc
  extends Race {
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instance += 1;
  }

  get maxLifePoints(): number {
    return 74;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }
}