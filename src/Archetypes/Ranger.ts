import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger
  extends Archetype {
  private static _instance = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger._instance += 1;
  }

  get energyType(): EnergyType { return this._energy; }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}