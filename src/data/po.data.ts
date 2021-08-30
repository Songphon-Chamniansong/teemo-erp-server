import { PoDocument } from '../db/models/po.model';

export interface CreatePO {
    customer: {
        id: string;
        name: string;
        address: string;
    };
    paymentTypeId: string;
    inventories: {
        id: string;
        qty: number;
    }[];
    approveById: string;
}

export interface PoData {
    code: PoDocument['code'];
    status: PoDocument['status'];
    customerId: PoDocument['customerId'];
    paymentType: PoDocument['paymentType'];
    deliveryInformation: PoDocument['deliveryInformation'];
    inventoryInformation: PoDocument['inventoryInformation'];
    createdInformation: PoDocument['createdInformation'],
    approvedInformation: PoDocument['approvedInformation'],
    companyInformation: PoDocument['companyInformation']
}