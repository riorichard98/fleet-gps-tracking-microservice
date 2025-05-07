import jwt from "jsonwebtoken";

import { LoginRequest } from "../joi/interface";
import { LoginResponse } from "./interface";
import { throwRequestError } from "../middleware/error-handler";
import { AUTH_ERROR_MESSAGE } from "../constants/auth-error-message";
import { env } from "../environment/environment";

const login = async (data: LoginRequest): Promise<LoginResponse> => {
    const { email, password } = data;
    const hardcodedEmail = 'rio@mail.com';
    const hardcodedPassword = '123';
    if (hardcodedEmail !== email) throwRequestError(AUTH_ERROR_MESSAGE.INVALID_EMAIL);
    if (hardcodedPassword !== password) throwRequestError(AUTH_ERROR_MESSAGE.INVALID_PASSWORD);
    const token = jwt.sign({ email }, env.JWT_SECRET, { expiresIn: '1d' });
    return { token }
}

export const authUsecase = {
    login
};