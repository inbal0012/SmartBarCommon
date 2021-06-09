import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';

class InventoryItem extends AbstractInventoryItem {
  minRequired;
  constructor(name: string, category: string, remaining: number, minRequired = 1) {
    super(name, category, remaining);
    this.minRequired = minRequired;
  }

  toJson() {
    var json = JSON.stringify(this);
    return json;
  }
}
class NullInventoryItem extends AbstractInventoryItem {
  constructor() {
    super('Unavailable', EInventoryCategory.Unavailable, 0);
  }

  toJson() {
    return "Unavailable"
  }

}

export default InventoryItem;
export { NullInventoryItem };
