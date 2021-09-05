import { InventoryDocument } from '../db/models/inventory.model';

export interface CreateInventoryData {
    code: InventoryDocument['code'];
    name: InventoryDocument['name'];
    price: InventoryDocument['price'];
    cost: InventoryDocument['cost'];
    information: InventoryDocument['information'];
}
export interface InventoryData {
    _id?: InventoryDocument['_id'];
    code: InventoryDocument['code'];
    name: InventoryDocument['name'];
    price: InventoryDocument['price'];
    cost: InventoryDocument['cost'];
    information: InventoryDocument['information'];
}