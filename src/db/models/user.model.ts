import mongoose, { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    code: string;
    role: {
        name: string;
    };
    permission: string[];
}

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    email: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    code: { type: String, required: true, unique: true },
    role: {
        name: { type: String },
    },
    permission: [
        { type: String }
    ]
});

export default mongoose.model<UserDocument>('Users', userSchema);
