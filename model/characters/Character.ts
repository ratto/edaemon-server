import Attribute from "./Attribute";
import CombatSkill from "./CombatSkill";

abstract class Character {
  Id: number | null;
  Attribute: Attribute;
  CombatSkill: CombatSkill

  constructor(attribute: Attribute,
              combatSkill: CombatSkill,
              id?: number) {
    this.Id = id ? id : null;
    this.Attribute = attribute;
    this.CombatSkill = combatSkill;
  }
}

export default Character;
