/* eslint-disable prettier/prettier */
import AbstractInventoryItem from './AbstractInventoryItem';

class BooleanInventoryItem extends AbstractInventoryItem {
  needStatusUpdate = false;

  constructor(id: string, name: string, category: string, remaining: boolean) {
    super(id, name, category, remaining);
  }

  toJson() {
    return JSON.stringify(this);
  }
}

export default BooleanInventoryItem;
