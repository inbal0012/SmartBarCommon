/* eslint-disable prettier/prettier */
import EInventoryStatus from '../../Enums/EInventoryStatus';

export default abstract class AbstractInventoryItem {
  id
  name;
  category;
  remaining;
  status;

  constructor(id: string, name: string, category: string, remaining: any) {
    this.id = id
    this.name = name;
    this.category = category;
    this.remaining = remaining;
    if (remaining > 0) {
      this.status = EInventoryStatus.Ok;
    }
  }

  abstract toJson(): any;
}
