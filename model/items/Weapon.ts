import WeaponType from "../enums/WeaponTypeEnum";
import Damage from "../general/Damage";
import Item from "./Item"

class Weapon extends Item {
  Speed: number;
  Type: WeaponType
  Damage: Damage | Array<Damage>
  MinReach: number | null;
  MaxReach: number | null;

  constructor(name: string, speed: number, type: WeaponType, damage: Damage | Array<Damage>, id?: number, minReach?: number, maxReach?: number, description?: string) {
    super(name, id, description)
    this.Speed = speed;
    this.Type = type;
    this.Damage = damage;
    this.MinReach = minReach ? minReach : null;
    this.MaxReach = maxReach ? maxReach : null;
  }
}

export default Weapon;
