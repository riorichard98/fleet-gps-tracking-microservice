import { Request } from 'express';
import { vehicleUsecase } from '../usecase/vehicle-usecase';
import { validateRequest } from '../utils/common';
import { vehicleHistoryLogSchema } from '../joi/schema/vehicle-joi';

const vehicleLastLocation = async (req: Request) => {
    const data = await vehicleUsecase.vehicleLastLocation(req.params.id)
    return { data, statusCode: 200 }
}

const vehicleHistoryLogs = async (req: Request) => {
    const query = validateRequest(vehicleHistoryLogSchema, req.query)
    const data = await vehicleUsecase.vehicleHistoryLogs(req.params.id, query)
    return { data, statusCode: 200 }
}

export const vehicleHandler = {
    vehicleLastLocation,
    vehicleHistoryLogs
}