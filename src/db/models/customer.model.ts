import mongoose, { Schema, Document } from 'mongoose';

export interface CustomerDocument extends Document {
    code: string;
    name: string;
    address: string;
}

const customerSchema = new Schema({
    code: { type: String },
    name: { type: String },
    address: { type: String },
}, { autoIndex: true });

export default mongoose.model<CustomerDocument>('Customers', customerSchema);
