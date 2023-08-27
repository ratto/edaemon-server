import DamageType from "../enums/DamageTypeEnum";
import Dice from "./Dice";

abstract class Damage {
  Dice: Dice;
  Type: DamageType

  constructor(dice: Dice, type: DamageType) {
    this.Dice = dice;
    this.Type = type;
  }
}

export default Damage;
