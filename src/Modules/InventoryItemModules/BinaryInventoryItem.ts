import EInventoryCategory from "../../Enums/EInventoryCategory";
import EInventoryStatus from "../../Enums/EInventoryStatus";
import AbstractInventoryItem from "./AbstractInventoryItem";

class BinaryInventoryItem extends AbstractInventoryItem {
    needStatusUpdate: boolean = false;

    constructor(name: string, category: string, remaining: boolean) {
        super(name, category, remaining);
        this.updateStatus();
    }


    updateStatus(): void {
        this.needStatusUpdate = true;
    }

    toJson() {
        return JSON.stringify(this);
    }

    use(amountUsed: number): void {
        this.updateStatus();
    }

    update(ingredientParam: string, newValue: any) {
        switch (ingredientParam) {
            case 'name':
                return { success: false, reason: "You can't change the name" };
            case 'category':
                if (newValue === EInventoryCategory.Spices || newValue === EInventoryCategory.Herbs) {
                    this.category = newValue;
                    return {
                        success: true,
                        reason: this.name + "'s category updated",
                    };
                }
                else return {
                    success: false,
                    reason: "can't change " + this.name + "'s category to " + newValue,
                };
            case 'remaining':
                if (typeof (newValue) === 'boolean') {
                    this.remaining = newValue;
                    this.needStatusUpdate = false;
                    this.status = this.remaining ? EInventoryStatus.Ok : EInventoryStatus.Empty
                    return {
                        success: true,
                        reason: this.name + 'remaining updated',
                    };
                }
                if (!(typeof (newValue) === 'number'))
                    return {
                        success: false,
                        reason:
                            "remaining has to be a number if you want to use it \nor a boolean if you want to update the status"
                    };

                if (newValue <= 0)
                    return {
                        success: false,
                        reason:
                            this.name + "'s remaining can't be 0 or lower"
                    };
                else if (!this.checkAvailability(newValue))
                    return {
                        success: false,
                        reason:
                            "There is a shortage of " + this.name,
                    };
                else {
                    this.use(newValue);
                    return {
                        success: true,
                        reason: this.name + 'used',
                    };
                }

            default:
                return {
                    success: false,
                    reason:
                        this.name + " doesn't have a " + ingredientParam + ' parameter',
                };
        }
    }

    checkAvailability(amountNeeded: number): boolean {
        return this.remaining;
    }

    updateRemaining(isRemained: boolean) {
        this.remaining = isRemained;
    }
}

export default BinaryInventoryItem;