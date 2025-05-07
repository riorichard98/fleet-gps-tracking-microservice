import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';

import { GENERAL_ERROR_MESSAGE } from "../constants/general-error-message"
import { env } from "../environment/environment";

export const authMiddleware = async (req: Request, _: Response, next: NextFunction) => {
    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken || !bearerToken.startsWith('Bearer ')) throw new Error('invalid token');
        const token = bearerToken.split(' ')[1];
        jwt.verify(token, env.JWT_SECRET);
        next()
    } catch (error) {
        next({
            statusCode: 401,
            message: GENERAL_ERROR_MESSAGE.UNAUTHORIZED
        })
    }
}