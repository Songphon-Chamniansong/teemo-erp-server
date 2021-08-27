import { CustomerDocument } from '../db/models/customer.model';

export interface CreateCustomer {
    code: string;
    name: string;
    address: string;
}

export interface CustomerData {
    _id: CustomerDocument['_id'];
    code: CustomerDocument['code'];
    name: CustomerDocument['name'];
    address: CustomerDocument['address'];
}