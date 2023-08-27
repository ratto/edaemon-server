import DiceType from "../../model/enums/DiceTypeEnum";

export function RollDice(times: number, die: DiceType): number {
  if (times <= 0)
    throw new Error('You must roll the die at least once.');

  let result: number = 0;

  for (let i = 0; i < times; i++) {
    result += Math.floor(Math.random() * die)
  }

  return result;
}
