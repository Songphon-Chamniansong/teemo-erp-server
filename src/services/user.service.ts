import { injectable, inject } from 'inversify';
import { Authentication } from '../middleware/authenticateToken';
import TYPES from '../config/types';
import { JResult, setJResult } from '../data/result.data';
import { CreateUserData, UserData } from '../data/user.data';
import { IUserRepository } from '../repositories/user.repository';

export interface IUserService {
    create(createUser: CreateUserData): Promise<JResult<UserData>>;
    login({id, password}: { id: string, password: string }): Promise<JResult<string>>;
}

@injectable()
export class UserService implements IUserService {
    constructor(
        @inject(TYPES.IUserRepository) private userRepository: IUserRepository
    ) {}

    public async create(createUser: CreateUserData): Promise<JResult<UserData>> {
        const user = await this.userRepository.create(createUser);
        if (!user) {
            return setJResult<UserData>({ isSuccess: false, value: null, errorCode: 'U02', errorMessage: 'Cannot create new user' });
        }
        return setJResult<UserData>({ isSuccess: true, value: user });
    }

    public async login({id, password}: { id: string, password: string }): Promise<JResult<string>> {
        const user = await this.userRepository.login(id, password);
        if (!user) {
            return setJResult<string>({ isSuccess: false, value: null, errorCode: 'U01', errorMessage: 'Username or Password is incorrect' });
        }
        const token = Authentication.GenerateAccessToken(user);
        return setJResult<string>({ isSuccess: true, value: token });
    }
    
}
