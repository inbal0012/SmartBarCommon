import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';

class FruitVegetable extends AbstractInventoryItem {
  minRequired;

  constructor(name: string, category: string, remaining: number, minRequired: number) {
    if (
      category === EInventoryCategory.Fruits ||
      category === EInventoryCategory.Vegetables
    ) {
      super(name, category, remaining);
      this.minRequired = minRequired;
    } else throw new Error(category + " can't be a Veg/Fruit type");
  }

  toJson() {
    JSON.stringify(this);
  }

}

export default FruitVegetable;
