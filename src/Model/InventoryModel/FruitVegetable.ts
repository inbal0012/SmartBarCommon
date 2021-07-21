/* eslint-disable prettier/prettier */
import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';

class FruitVegetable extends AbstractInventoryItem {
  minRequired;

  constructor(
    id: string,
    name: string,
    category: string,
    remaining: number,
    minRequired: number,
  ) {
    super(id, name, category, remaining);
    this.minRequired = minRequired;
    this.updateStatus();
  }

  updateStatus() {
    if (this.remaining > this.minRequired * 2)
      this.status = EInventoryStatus.Ok;
    else if (this.remaining > this.minRequired)
      this.status = EInventoryStatus.AlmostEmpty;
    else this.status = EInventoryStatus.Empty;
  }


  toJson() {
    JSON.stringify(this);
  }

  static isAFruitVegetableCategory(category: string) {
    if (
      category === EInventoryCategory.Fruits ||
      category === EInventoryCategory.Vegetables
    )
      return true;
    else return false;
  }
}

export default FruitVegetable;
