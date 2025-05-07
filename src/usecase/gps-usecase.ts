import { AcceptGPSLogSchema } from "../joi/interface"
import { AcceptGPSLogResponse } from "./interface"
import prisma from "../models/primsa-client";
import { throwRequestError } from "../middleware/error-handler";
import { GENERAL_ERROR_MESSAGE } from "../constants/general-error-message";

const acceptGPSLog = async (data: AcceptGPSLogSchema): Promise<AcceptGPSLogResponse> => {
    const { vehicleId, latitude, longitude, timestamp, speed } = data;
    const foundVehicle = await prisma.vehicle.findFirst({
        where: { id: vehicleId }
    })
    if (!foundVehicle) {
        throwRequestError(GENERAL_ERROR_MESSAGE.DATA_NOT_EXISTS)
    }
    let isViolation = false
    if (speed > 100) {
        isViolation = true
    }
    const createdLog = await prisma.gPSLog.create({
        data: {
            latitude,
            longitude,
            timestamp,
            speed,
            vehicle: {
                connect: {
                    id: vehicleId
                }
            },
            isViolation
        }
    })
    return {
        logId: createdLog.id
    }
}

export const gpsUsecase = {
    acceptGPSLog
}