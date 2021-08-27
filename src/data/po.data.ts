import { PoDocument } from '../db/models/po.model';

export interface CreatePO {
    customer: {
        id: string;
        name: string;
        address: string;
    };
    paymentTypeId: string;
    items: {
        id: string;
        amount: number;
    }[];
    approveById: string;
}

export interface PoData {
    code: PoDocument['code'];
    status: PoDocument['status'];
    customerId: PoDocument['customerId'];
    paymentType: PoDocument['paymentType'];
    deliveryInformation: PoDocument['deliveryInformation'];
    itemsInformation: PoDocument['itemsInformation'];
    createdInformation: PoDocument['createdInformation'],
    approvedInformation: PoDocument['approvedInformation'],
    companyInformation: PoDocument['companyInformation']
}