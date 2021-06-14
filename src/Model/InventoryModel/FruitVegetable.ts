/* eslint-disable prettier/prettier */
import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';

class FruitVegetable extends AbstractInventoryItem {
  minRequired;

  constructor(
    name: string,
    category: string,
    remaining: number,
    minRequired: number,
  ) {
    super(name, category, remaining);
    this.minRequired = minRequired;
  }

  toJson() {
    JSON.stringify(this);
  }
}

export default FruitVegetable;
