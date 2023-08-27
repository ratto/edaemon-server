import WeaponType from "../enums/WeaponTypeEnum";
import Damage from "../general/Damage";
import Item from "./Item"

class Weapon extends Item {
  Speed: number;
  Type: WeaponType
  Damage: Damage | Array<Damage>

  constructor(name: string, speed: number, type: WeaponType, damage: Damage | Array<Damage>) {
    super(name)
    this.Speed = speed;
    this.Type = type;
    this.Damage = damage;
  }
}

export default Weapon;
