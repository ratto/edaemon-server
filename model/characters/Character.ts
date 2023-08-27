import Attribute from "./Attribute";
import BasicSkill from "./BasicSkill";
import CombatSkill from "./CombatSkill";

abstract class Character {
  public Id: number | null;
  public Attribute: Attribute;
  public BasicSkillList: Array<BasicSkill>;
  public CombatSkillList: Array<CombatSkill>;

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
