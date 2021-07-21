/* eslint-disable prettier/prettier */
import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';

class BooleanInventoryItem extends AbstractInventoryItem {
  needStatusUpdate = false;

  constructor(id: string, name: string, category: string, remaining: boolean) {
    super(id, name, category, remaining);
    this.status = this.remaining
        ? EInventoryStatus.Ok
        : EInventoryStatus.Empty;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static isABooleanCategory(category: string) {
    if (
      category === EInventoryCategory.Herbs ||
      category === EInventoryCategory.Spices
    )
      return true;
    else return false;
  }
}

export default BooleanInventoryItem;
