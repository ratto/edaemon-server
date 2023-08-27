abstract class Item {
  Id: number | null;
  Name: string;
  Description: string | null;

  constructor(name: string, id?: number, description?: string) {
    this.Name = name;
    this.Id = id ? id : null;
    this.Description = description ? description : null;
  }
}

export default Item;
