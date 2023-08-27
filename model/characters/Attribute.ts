abstract class Attribute {
  public Strength: number;
  public Dexterity: number;
  public Agility: number;
  public Constitution: number;
  public Intelligence: number;
  public WillPower: number;
  public Perception: number;
  public Charisma: number;

  constructor(strength: number,
              dexterity: number,
              agility: number,
              constitution: number,
              intelligence: number,
              willPower: number,
              perception: number,
              charisma: number) {
    this.Strength = strength;
    this.Dexterity = dexterity;
    this.Agility = agility;
    this.Constitution = constitution;
    this.Intelligence = intelligence;
    this.WillPower = willPower;
    this.Perception = perception;
    this.Charisma = charisma;
  }
}

export default Attribute;
