/* eslint-disable prettier/prettier */
import AbstractInventoryItem from './InventoryModel/AbstractInventoryItem';
import { NullInventoryItem } from './InventoryModel/InventoryItem';

class Recipe {
  id: string;
  name: string;
  method: [string];
  portion: number;
  strength = 0;
  //categories: Array<string>;
  // TODO measurement converting ( + measure unit for misc InItems)
  // TODO garnish
  // TODO parse ingredients

  constructor(
    id: string,
    name: string,
    public ingredients: [number, AbstractInventoryItem, boolean][],
    method: [string],
    portion: number,
  ) {
    this.id = id
    this.name = name;
    this.method = method;
    this.portion = portion;
    //this.categories = new Array(ERecipeCategory.StrengthNonAlcoholic);
  }

  addCategory(category: string) {
    // TODO implement addCategory function
  }

  toJson() {
    return JSON.stringify({
      name: this.name,
      ingredients: this.ingredientsToJson(),
      method: this.method,
      portion: this.portion,
      //categories: JSON.stringify(this.categories),
    });
  }

  ingredientsToJson() {
    let str = '[';

    this.ingredients.forEach((item) => {
      str += item[0] + ' ' + item[1].name + ', ';
    });
    str += ']';
    return str;
  }
}

class NullRecipe extends Recipe {
  constructor() {
    super(
      '0',
      'Recipe Not Found',
      [[0, new NullInventoryItem(), false]],
      ['Recipe Not Found'],
      0,
    );
  }

  addCategory(category: string) {
    // TODO implement addCategory function
  }

  toJson() {
    return JSON.stringify('Recipe Not Found');
  }

  ingredientsToJson(): string {
    return 'Recipe Not Found';
  }
}
export default Recipe;
export { NullRecipe };
