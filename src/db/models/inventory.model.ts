import mongoose, { Schema, Document } from 'mongoose';

export interface InventoryDocument extends Document {
    code: string;
    name: string;
    price: number;
    cost: number;
    information: string;
}

const inventorySchema = new Schema({
    code: { type: String },
    name: { type: String },
    price: { type: Number },
    cost: { type: Number },
    information: { type: String }
}, { autoIndex: true });

export default mongoose.model<InventoryDocument>('Inventories', inventorySchema);
