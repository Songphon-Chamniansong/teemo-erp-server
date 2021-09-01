import { NextFunction, Request, Response } from 'express';
import { sign, verify, VerifyErrors, JwtPayload } from 'jsonwebtoken';
import { AuthToken } from '../data/auth.data';
import { CreateCustomer } from '../data/customer.data';

const secret: string = process.env.TOKEN_SECRET || 'Teemo';

export class Authentication {
    public static AuthenticateToken(request: Request, response: Response, next: NextFunction): void {
        const unauthorized = (message: string, status = 403) => response.status(status).json({
            ok: false,
            status: status,
            message: message
        });
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) {
            unauthorized('Required ${requestHeader} header not found.', 401);
            return;
        }
        verify(token, secret, (err: VerifyErrors | null, decode: JwtPayload | undefined) => {
            if (err || !decode) {
                unauthorized('Your Token is not valid.');
                return;
            }
            request.body.authToken = Authentication.ConvertJwtPayLoad2Account(decode);
            next();
        });
    }

    private static ConvertJwtPayLoad2Account(decode: JwtPayload): AuthToken {
        const authToken: AuthToken = {
            account: decode['account'],
            ...decode
        };
        return authToken;
    }

    public static GenerateAccessToken(user: CreateCustomer): string {
        const token = sign({ account: user }, secret, { expiresIn: '3h' });
        return token;
    }
}
