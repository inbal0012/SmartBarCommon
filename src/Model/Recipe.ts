import AbstractInventoryItem from './InventoryModel/AbstractInventoryItem';
import { NullInventoryItem } from './InventoryModel/InventoryItem';

class Recipe {
    name: string;
    method: [string];
    portion: number;
    //categories: Array<string>;
    // TODO measurement converting ( + measure unit for misc InItems)
    // TODO garnish
    // TODO parse ingredients

    constructor(name: string, public ingredients: [number, AbstractInventoryItem, boolean][], method: [string], portion: number) {
        this.name = name;
        this.method = method;
        this.portion = portion;
        //this.categories = new Array(ERecipeCategory.StrengthNonAlcoholic);
    }

    addCategory(category: string) {
        // TODO
    }

    toJson() {
        return JSON.stringify({
            name: this.name,
            ingredients: this.ingredientsToJson(),
            method: this.method,
            portion: this.portion,
            //categories: JSON.stringify(this.categories),
        })
    }

    ingredientsToJson() {
        var str: string = "[";

        this.ingredients.forEach(item => {
            str += item[0] + " " + item[1].name + ", ";
        });
        str += "]"
        //str+=this.ingredients.map(ing => {return (<li>{ing[0]} {ing[1].getName()}</li>)})
        return str;
    }
}

class NullRecipe extends Recipe {
    constructor() {
        super("Recipe Not Found", [[0, new NullInventoryItem(), false]], ["Recipe Not Found"], 0);
    }

    addCategory(category: string) {
        // TODO
    }

    checkAvailability() {
        return { success: false, reason: "Recipe Not Found" };
    }

    calculateDrinkStrength() {
        return 0;
    }

    toJson() {
        return JSON.stringify("Recipe Not Found");
    }

    ingredientsToJson(): string {
        return "Recipe Not Found";
    }
}
export default Recipe;
export { NullRecipe };