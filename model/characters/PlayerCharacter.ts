import Attribute from "./Attribute";
import BasicSkill from "./BasicSkill";
import Character from "./Character";
import CombatSkill from "./CombatSkill";

class PlayerCharacter extends Character {
  Name: string;
  Level: number;
  Experience: number;
  HpTotal: number;
  HpCurrent: number;

  constructor (name: string, attribute: Attribute, basicSkillList: Array<BasicSkill>, combatSkillList: Array<CombatSkill>) {
    super(attribute, basicSkillList, combatSkillList)
    this.Name = name;
    this.Level = 1;
    this.Experience = 0;
    this.HpCurrent = this.HpTotal = Math.ceil((attribute.Strength + attribute.Constitution) / 2);
  }
}

export default PlayerCharacter;
