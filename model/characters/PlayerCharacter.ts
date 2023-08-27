import Attribute from "./Attribute";
import BasicSkill from "./BasicSkill";
import Character from "./Character";
import CombatSkill from "./CombatSkill";

class PlayerCharacter extends Character {
  public Name: string;
  public Age: number;
  private _level: number;
  private _experience: number;
  private _hpTotal: number;
  private _hpCurrent: number;

  constructor (name: string, age: number, attribute: Attribute, basicSkillList: Array<BasicSkill>, combatSkillList: Array<CombatSkill>, id?: number, level?: number) {
    super(attribute, basicSkillList, combatSkillList, id)
    this.Name = name;
    this.Age = age;
    this._level = level ? level : 1;
    this._experience = 0;
    this._hpCurrent = this._hpTotal = Math.ceil((attribute.Strength + attribute.Constitution) / 2);
  }

  public get level(): number {
    return this._level;
  }

  public increaseLevel(): void {
    this._level + 1;
  }

  public get experience(): number {
    return this._experience;
  }

  public set experience(xp: number) {
    this._experience + xp;
  }

  public get hpTotal(): number {
    return this._hpTotal;
  }

  public get hpCurrent(): number {
    return this._hpCurrent;
  }

  public takeHit(damage: number) {
    this._hpCurrent - damage;
  }

  public healWound(cure: number) {
    this._hpCurrent + cure;
  }
}

export default PlayerCharacter;
