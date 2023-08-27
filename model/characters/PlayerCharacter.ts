import Attribute from "./Attribute";
import Character from "./Character";
import CombatSkill from "./CombatSkill";

class PlayerCharacter extends Character {
  Name: string;
  Level: number;
  Experience: number;
  HpTotal: number;
  HpCurrent: number;

  constructor (name: string, attribute: Attribute, combatSkill: CombatSkill) {
    super(attribute, combatSkill);
    this.Name = name;
    this.Level = 1;
    this.Experience = 0;
    this.HpCurrent = this.HpTotal = Math.ceil((attribute.Strength + attribute.Constitution) / 2);
  }
}

export default PlayerCharacter;
