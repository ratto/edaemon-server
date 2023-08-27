import ProtectionIndex from "../general/ProtectionIndex";
import Item from "./Item";

class Armor extends Item {
  Ip: ProtectionIndex | Array<ProtectionIndex>
  DexPenalty: number;
  AgiPenalty: number;

  constructor(name: string, ip: ProtectionIndex | Array<ProtectionIndex>, dexPenalty: number, agiPenalty: number, id?: number, description?: string) {
    super(name, id, description)
    this.Ip = ip;
    this.DexPenalty = dexPenalty;
    this.AgiPenalty = agiPenalty;
  }
}

export default Armor;
