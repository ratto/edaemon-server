import Attribute from "./Attribute";
import BasicSkill from "./BasicSkill";
import Character from "./Character";
import CombatSkill from "./CombatSkill";

class PlayerCharacter extends Character {
  Name: string;
  Age: number;
  Level: number;
  Experience: number;
  HpTotal: number;
  HpCurrent: number;

  constructor (name: string, age: number, attribute: Attribute, basicSkillList: Array<BasicSkill>, combatSkillList: Array<CombatSkill>, id?: number, level?: number) {
    super(attribute, basicSkillList, combatSkillList, id)
    this.Name = name;
    this.Age = age;
    this.Level = level ? level : 1;
    this.Experience = 0;
    this.HpCurrent = this.HpTotal = Math.ceil((attribute.Strength + attribute.Constitution) / 2);
  }
}

export default PlayerCharacter;
