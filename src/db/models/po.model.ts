import mongoose, { Schema, Document } from 'mongoose';
import { UserDocument } from './user.model';
import { CustomerDocument } from './customer.model';
import { InventoryDocument } from './inventory.model';

export interface PoDocument extends Document {
    code: string;
    status: string;
    customerId: CustomerDocument['_id'];
    paymentType: {
        code: string;
        name: string;
    };
    deliveryInformation: {
        code: string;
        name: string;
    };
    inventoryInformation: {
        inventoryId: InventoryDocument['_id'];
        qty: number;
    }[];
    createdInformation: {
        createdBy: UserDocument['_id'],
        createDate: Date;
    },
    approvedInformation: {
        approveOwmer: UserDocument['_id'],
    },
    companyInformation: {
        name: string;
        taxId: string;
        address: string;
    }
}

const poSchema = new Schema({
    code: { type: String },
    status: { type: String },
    customerId: { type: Schema.Types.ObjectId, required: true },
    paymentType: {
        code: { type: String },
        name: { type: String }
    },
    deliveryInformation: {
        code: { type: String },
        name: { type: String }
    },
    inventoryInformation: [
        {
            inventoryId: { type: Schema.Types.ObjectId },
            qty: { type: Number }
        }
    ],
    createdInformation: {
        createdBy: { type: Schema.Types.ObjectId, required: true },
        createDate: { type: Date }
    },
    approvedInformation: {
        approveOwmer: { type: Schema.Types.ObjectId },
    },
    companyInformation: {
        name: { type: String },
        taxId: { type: String },
        address: { type: String }
    }
}, { autoIndex: true });

export default mongoose.model<PoDocument>('POs', poSchema);
