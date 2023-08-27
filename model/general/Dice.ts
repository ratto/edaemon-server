import DiceType from "../enums/DiceTypeEnum";

class Dice {
  Rolls: number;
  Type: DiceType

  constructor(rolls: number, type: DiceType) {
    this.Rolls = rolls;
    this.Type = type
  }
}

export default Dice;
