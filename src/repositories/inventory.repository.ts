import { injectable } from 'inversify';
import InventoryModel from '../db/models/inventory.model';
import { CreateInventoryData, InventoryData } from '../data/inventory.data';

export interface IInventoryRepository {
    create(inventoryData: CreateInventoryData): Promise<InventoryData>;
    getById(id: string): Promise<InventoryData>;
}

@injectable()
export class InventoryRepository implements IInventoryRepository {
    public async create(inventoryData: CreateInventoryData): Promise<InventoryData> {
        const result = await InventoryModel.create(inventoryData);
        if(result) {
            return {
                _id: result['_id'],
                code: result['code'],
                name: result['name'],
                price: result['price'],
                cost: result['cost'],
                information: result['information']
            };
        }
        return null;
    }
    public async getById(id: string): Promise<InventoryData> {
        const result = await InventoryModel.findById(id);
        if(result) {
            return {
                _id: result['_id'],
                code: result['code'],
                name: result['name'],
                price: result['price'],
                cost: result['cost'],
                information: result['information']
            };
        }
        return null;
    }
}
