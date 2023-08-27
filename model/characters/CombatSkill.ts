import AttributeEnum from "./enums/AttributeEnum";

class CombatSkill {
  Id: number | null;
  Name: string;
  AtkValue: number;
  DefValue: number;
  Attribute: AttributeEnum

  constructor (name: string, atk: number, def: number, usedAttribute: AttributeEnum, id: number | null) {
    this.Name = name;
    this.AtkValue = atk,
    this.DefValue = def;
    this.Attribute = usedAttribute,
    this.Id = id ? id : null
  }
}

export default CombatSkill;
