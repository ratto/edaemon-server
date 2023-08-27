abstract class Attributes {
  Strength: number;
  Dexterity: number;
  Agility: number;
  Constitution: number;
  Intelligence: number;
  WillPower: number;
  Perception: number;
  Charisma: number;

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

export default Attributes;
