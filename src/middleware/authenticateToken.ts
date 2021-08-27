import { NextFunction, Request, Response } from 'express';
import { sign, verify, VerifyErrors, JwtPayload } from 'jsonwebtoken';
import { AuthToken } from '../data/auth.data';
import { CreateCustomer } from '../data/customer.data';

const secret: string = process.env.TOKEN_SECRET || 'Teemo';

export const authenticateToken = (request: Request, response: Response, next: NextFunction) => {
    const unauthorized = (message: string, status = 403) => response.status(status).json({
        ok: false,
        status: status,
        message: message
    });
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return unauthorized('Required ${requestHeader} header not found.', 401);
    }
    verify(token, secret, (err: VerifyErrors | null, decode: JwtPayload | undefined) => {
        console.log(decode, Date.now())
        if (err || !decode) {
            return unauthorized('Your Token is not valid.');
        }
        request.body.authToken = convertJwtPayLoad2Account(decode);
        next();
    })
}

const convertJwtPayLoad2Account = (decode: JwtPayload) => {
    const authToken: AuthToken = {
        account: decode['account'],
        ...decode
    }
    return authToken
}

export const generateAccessToken = (user: CreateCustomer): string => {
    const token = sign({ account: user }, secret, { expiresIn: '3h' });
    return token;
}
