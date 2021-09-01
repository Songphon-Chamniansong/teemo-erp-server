import { injectable } from 'inversify';
import UserModel from '../db/models/user.model';
import { UserData, CreateUserData } from '../data/user.data';

export interface IUserRepository {
    create(userData: CreateUserData): Promise<UserData>;
    getById(id: string): Promise<UserData>;
    login(id: string, password: string): Promise<UserData>;
}

@injectable()
export class UserRepository implements IUserRepository {
    public async create(userData: CreateUserData): Promise<UserData> {
        const result = await UserModel.create(userData);
        if(result) {
            return {
                _id: result._id,
                code: result.code,
                username: result.username,
                email: result.email,
                firstName: result.firstName,
                lastName: result.lastName,
                role: result.role,
                permission: result.permission,
            };
        }
        return null;
    }

    public async getById(id: string): Promise<UserData> {
        const result = await UserModel.findById(id);
        if(result) {
            return {
                _id: result._id,
                code: result.code,
                username: result.username,
                email: result.email,
                firstName: result.firstName,
                lastName: result.lastName,
                role: result.role,
                permission: result.permission,
            };
        }
        return null;
    }

    public async login(id: string, password: string): Promise<UserData> {
        const result = await UserModel.findOne(
            { 
                $and: [
                    { $or: 
                        [
                            { username : { $regex : new RegExp(id, 'i') } },
                            { email : { $regex : new RegExp(id, 'i') } },
                        ]
                    },
                    { password: password }
                ]
            });
        if(result) {
            return {
                _id: result._id,
                code: result.code,
                username: result.username,
                email: result.email,
                firstName: result.firstName,
                lastName: result.lastName,
                role: result.role,
                permission: result.permission,
            };
        }
        return null;
    }
}
