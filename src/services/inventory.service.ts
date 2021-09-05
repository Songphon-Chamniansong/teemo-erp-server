import { injectable, inject } from 'inversify';
import TYPES from '../config/types';
import { JResult, setJResult } from '../data/result.data';
import { IInventoryRepository } from '../repositories/inventory.repository';
import { CreateInventoryData } from '../data/inventory.data';
import { InventoryData } from '../data/inventory.data';

export interface IInventoryService {
    create(inventoryData: CreateInventoryData): Promise<JResult<InventoryData>>;
}

@injectable()
export class InventoryService implements IInventoryService {
    constructor(
        @inject(TYPES.IInventoryRepository) private inventoryRepository: IInventoryRepository
    ) {}

    public async create(createUser: CreateInventoryData): Promise<JResult<InventoryData>> {
        const inventory = await this.inventoryRepository.create(createUser);
        if (!inventory) {
            return setJResult<InventoryData>({ isSuccess: false, value: null, errorCode: 'I01', errorMessage: 'Cannot create new inventory' });
        }
        return setJResult<InventoryData>({ isSuccess: true, value: inventory });
    }
}
