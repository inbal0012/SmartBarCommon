import AbstractInventoryItem from "./AbstractInventoryItem";

class BooleanInventoryItem extends AbstractInventoryItem {
    needStatusUpdate: boolean = false;

    constructor(name: string, category: string, remaining: boolean) {
        super(name, category, remaining);
    }

    toJson() {
        return JSON.stringify(this);
    }

}

export default BooleanInventoryItem;