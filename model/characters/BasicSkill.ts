import AttributeEnum from "../enums/AttributeEnum";

class BasicSkill {
  public Id: number | null;
  public Name: string;
  public UsedAttribute: AttributeEnum;
  public Value: number;

  constructor (name: string,
              usedAttribute: AttributeEnum,
              value: number,
              id?: number) {
    this.Name = name;
    this.UsedAttribute = usedAttribute;
    this.Value = value;
    this.Id = id ? id : null
  }
}

export default BasicSkill;
