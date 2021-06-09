import EInventoryStatus from '../../Enums/EInventoryStatus';

export default abstract class AbstractInventoryItem {
    name;
    category;
    remaining;
    status;

    constructor(name: string, category: string, remaining: any) {
        this.name = name;
        this.category = category;
        this.remaining = remaining;
        if (remaining > 0) {
            this.status = EInventoryStatus.Ok;
        }
    }

    abstract toJson(): any;
}
