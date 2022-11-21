import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE
  extends Battle {
  private _player: Fighter;
  private _enemies: Fighter[] | SimpleFighter[];

  constructor(player: Fighter, enemies: Fighter[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  monsterAttack(i: number): void {
    this._enemies.forEach((enemy, index) => {
      if (index >= i) {
        enemy.attack(this._player);
      }
    });
  }

  fight(): number {
    for (let i = 0; i < this._enemies.length; i) {
      this._player.attack(this._enemies[i]);
      if (this._enemies[i].lifePoints === -1) {
        i += 1;
      } 
      this.monsterAttack(i);
      if (super.fight() === -1) {
        return -1;
      }
    }
    return 1;
  }
}