import { InventoryDocument } from '../db/models/inventory.model';

export interface InventoryData {
    id?: InventoryDocument['_id'];
    code: InventoryDocument['code'];
    name: InventoryDocument['name'];
    price: InventoryDocument['price'];
    cost: InventoryDocument['cost'];
    information: InventoryDocument['information'];
}