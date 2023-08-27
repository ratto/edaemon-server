import AttributeEnum from "../enums/AttributeEnum";

class BasicSkill {
  Id: number | null;
  Name: string;
  UsedAttribute: AttributeEnum;
  Value: number;

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
