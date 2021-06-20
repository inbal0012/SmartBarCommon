/* eslint-disable prettier/prettier */
import AbstractInventoryItem from './AbstractInventoryItem';
class Bottle extends AbstractInventoryItem {
  alcoholPercentage = 0;
  minRequired: number;

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
    const json = JSON.stringify(this);
    return json;
  }
}

class BottleBuilder {
  private bottle: Bottle;

  constructor(
    name: string,
    category: string,
    remaining: number,
    minRequired: number,
  ) {
    this.bottle = new Bottle(name, category, remaining, minRequired);
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