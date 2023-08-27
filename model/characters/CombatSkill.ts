import AttributeEnum from "../enums/AttributeEnum";

class CombatSkill {
  public Id: number | null;
  public Name: string;
  public AtkValue: number;
  public DefValue: number;
  public Attribute: AttributeEnum

  constructor (name: string, atk: number, def: number, usedAttribute: AttributeEnum, id: number | null) {
    this.Name = name;
    this.AtkValue = atk,
    this.DefValue = def;
    this.Attribute = usedAttribute,
    this.Id = id ? id : null
  }
}

export default CombatSkill;
