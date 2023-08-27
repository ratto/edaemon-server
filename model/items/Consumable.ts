import Item from "./Item";

class Consumable extends Item {
  // eslint-disable-next-line @typescript-eslint/ban-types
  Effect: Function | null

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(name: string, effect: Function, id?: number, description?: string) {
    super(name, id, description);
    this.Effect = effect;
  }
}

export default Consumable;
