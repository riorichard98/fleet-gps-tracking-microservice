import { Request } from 'express';
import { acceptGPSLogSchema } from '../joi/schema/gps-joi';
import { gpsUsecase } from '../usecase/gps-usecase';
import { validateRequest } from '../utils/common';

const acceptGPSLog = async (req: Request) => {
    const body = validateRequest(acceptGPSLogSchema, req.body)
    const data = await gpsUsecase.acceptGPSLog(body)
    return { data, statusCode: 200 }
}

export const gpsHandler = {
    acceptGPSLog
}