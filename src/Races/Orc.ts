import Race from './Race';

export default class Orc
  extends Race {
  private static _instance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instance += 1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return this._instance;
  }
}