/* eslint-disable prettier/prettier */
import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';

class InventoryItem extends AbstractInventoryItem {
  minRequired;
  constructor(
    id: string,
    name: string,
    category: string,
    remaining: number,
    minRequired = 1,
  ) {
    super(id, name, category, remaining);
    this.minRequired = minRequired;
  }

  toJson() {
    const json = JSON.stringify(this);
    return json;
  }
}
class NullInventoryItem extends AbstractInventoryItem {
  constructor() {
    super('0', 'Unavailable', EInventoryCategory.Unavailable, 0);
  }

  toJson() {
    return 'Unavailable';
  }
}

export default InventoryItem;
export { NullInventoryItem };
