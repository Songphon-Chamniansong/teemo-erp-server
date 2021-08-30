import { injectable } from 'inversify';
import CustomerModel from '../db/models/customer.model';
import { CustomerData, CreateCustomer } from '../data/customer.data';

export interface ICustomerRepository {
    create(customerData: CreateCustomer): Promise<CustomerData>;
    getById(id: string): Promise<CustomerData>;
}

@injectable()
export class CustomerRepository implements ICustomerRepository {
    public async create(customerData: CreateCustomer): Promise<CustomerData> {
        const result = await CustomerModel.create(customerData);
        if(result) {
            return {
                _id: result._id,
                code: result.code,
                name: result.name,
                address: result.address
            };
        }
        return null;
    }
    public async getById(id: string): Promise<CustomerData> {
        const result = await CustomerModel.findById(id);
        if(result) {
            return {
                _id: result._id,
                code: result.code,
                name: result.name,
                address: result.address
            };
        }
        return null;
    }
}
