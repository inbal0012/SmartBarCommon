/* eslint-disable prettier/prettier */
import EInventoryCategory from '../../Enums/EInventoryCategory';
import EInventoryStatus from '../../Enums/EInventoryStatus';
import AbstractInventoryItem from './AbstractInventoryItem';
class Bottle extends AbstractInventoryItem {
  alcoholPercentage = 0;
  minRequired: number;

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
    const json = JSON.stringify(this);
    return json;
  }

  static isABottleCategory(category: string) {
    if (
      Object.values(EInventoryCategory.BottleCategory).includes(category) ||
      Object.values(EInventoryCategory.BottleCategory.AlcoholCategory).includes(
        category,
      )
    )
      return true;
    else return false;
  }

  static isAAlcoholCategory(category: string) {
    if (
      Object.values(EInventoryCategory.BottleCategory.AlcoholCategory).includes(
        category,
      )
    )
      return true;
    else return false;
  }
}

class BottleBuilder {
  private bottle: Bottle;

  constructor(
    id: string,
    name: string,
    category: string,
    remaining: number,
    minRequired: number,
  ) {
    this.bottle = new Bottle(id, name, category, remaining, minRequired);
  }

  alcoholPercentage(alcoholPercentage: number) {
    this.bottle.alcoholPercentage = alcoholPercentage;
    return this;
  }

  build() {
    if (this.bottle.alcoholPercentage === undefined) {
      this.bottle.alcoholPercentage = 0;
    }
    return this.bottle;
  }
}

export default BottleBuilder;
export { Bottle };
