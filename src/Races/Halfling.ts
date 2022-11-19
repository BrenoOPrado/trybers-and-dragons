import Race from './Race';

export default class Halfling
  extends Race {
  private static _instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instance += 1;
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return this._instance;
  }
}