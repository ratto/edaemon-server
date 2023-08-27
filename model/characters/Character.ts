import Attribute from "./Attribute";
import BasicSkill from "./BasicSkill";
import CombatSkill from "./CombatSkill";

abstract class Character {
  Id: number | null;
  Attribute: Attribute;
  BasicSkillList: Array<BasicSkill>;
  CombatSkillList: Array<CombatSkill>;

  constructor(attribute: Attribute,
              basicSkillList: Array<BasicSkill>,
              combatSkillList: Array<CombatSkill>,
              id?: number) {
    this.Id = id ? id : null;
    this.Attribute = attribute;
    this.BasicSkillList = basicSkillList;
    this.CombatSkillList = combatSkillList;
  }
}

export default Character;
