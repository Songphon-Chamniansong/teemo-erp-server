export interface AuthToken {
    account: {
        id: string;
        code: string;
        role: string;
        permission: {
            [key: string]: string
        }
    };
    iat?: number;
    exp?: number;
}