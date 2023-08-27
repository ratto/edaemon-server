import Dice from "../../model/enums/DiceTypeEnum";
import { RollDice } from "../shared/DiceRoller";

export function BasicTest(source: number, difficulty?: number): boolean {
  const dieResult = RollDice(1, Dice.d100);
  const diff = difficulty ? difficulty : 0;

  if (dieResult > 95)
    return false;

  return (source) <= (dieResult + diff);
}

export function ContestTest(activeSource: number, passiveSource: number): boolean {
  const successRate = 50;

  if (successRate + activeSource - passiveSource < 0)
    return false;

  if (successRate + activeSource - passiveSource < 100)
    return true;

  const dieResult = RollDice(1, Dice.d100);

  return successRate + activeSource - passiveSource <= dieResult;
}

export function AttributeValueConversion(conversionFactor: number, attribute: number): number {
  return conversionFactor * Math.pow(2, (attribute / 6));
}
