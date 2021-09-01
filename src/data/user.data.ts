import { UserDocument } from '../db/models/user.model';

export interface UserData {
    _id: UserDocument['_id'];
    code: UserDocument['code'];
    username: UserDocument['username'];
    email: UserDocument['email'];
    firstName: UserDocument['firstName'];
    lastName: UserDocument['lastName'];
    role: UserDocument['role'];
    permission: UserDocument['permission'];
}

export interface CreateUserData {
    code: UserDocument['code'];
    username: UserDocument['username'];
    password: UserDocument['password'];
    email: UserDocument['email'];
    firstName: UserDocument['firstName'];
    lastName: UserDocument['lastName'];
    role: UserDocument['role'];
    permission: UserDocument['permission'];
}