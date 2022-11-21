import Monster from './Monster';

export default class Dragon
  extends Monster {
  private _lifePoints: number;
  private _strength: number;
    
  constructor() {
    super();
    this._lifePoints = 999;
    this._strength = 250;
  }
}