import { UserData } from './user.data';

export interface AuthToken {
    account: UserData;
    iat?: number;
    exp?: number;
}