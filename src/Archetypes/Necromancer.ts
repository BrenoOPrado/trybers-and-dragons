import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer
  extends Archetype {
  private static _instance = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Necromancer._instance += 1;
  }

  get energyType(): EnergyType { return this._energy; }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}