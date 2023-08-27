import DamageType from "../enums/DamageTypeEnum";

abstract class ProtectionIndex {
  Protection: number;
  DamageType: DamageType

  constructor(protection: number, damageType: DamageType) {
    this.Protection = protection;
    this.DamageType = damageType;
  }
}

export default ProtectionIndex;
