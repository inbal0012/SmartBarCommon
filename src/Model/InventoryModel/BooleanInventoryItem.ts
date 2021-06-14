/* eslint-disable prettier/prettier */
import AbstractInventoryItem from './AbstractInventoryItem';

class BooleanInventoryItem extends AbstractInventoryItem {
  needStatusUpdate = false;

  constructor(name: string, category: string, remaining: boolean) {
    super(name, category, remaining);
  }

  toJson() {
    return JSON.stringify(this);
  }
}

export default BooleanInventoryItem;
