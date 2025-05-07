import { VehicleLastLocationResponse } from "./interface"
import prisma from "../models/primsa-client"
import { throwRequestError } from "../middleware/error-handler"
import { GENERAL_ERROR_MESSAGE } from "../constants/general-error-message"
import { VehicleHistoryLogSchema } from "../joi/interface"
import { GPSLog } from "@prisma/client"

const validateVehicle = async (vehicleId: string): Promise<void> => {
    const foundVehicle = await prisma.vehicle.findFirst({
        where: { id: vehicleId }
    })
    if (!foundVehicle) {
        throwRequestError(GENERAL_ERROR_MESSAGE.DATA_NOT_EXISTS)
    }
}

const vehicleLastLocation = async (vehicleId: string): Promise<VehicleLastLocationResponse> => {
    await validateVehicle(vehicleId)
    const latestLog = await prisma.gPSLog.findFirst({
        where: { vehicleId },
        orderBy: { timestamp: 'desc' },
    })
    if (!latestLog) {
        return {
            latitude: null,
            longitude: null
        }
    }
    return {
        latitude: String(latestLog.latitude),
        longitude: String(latestLog.longitude)
    }
}

const vehicleHistoryLogs = async (vehicleId: string, query: VehicleHistoryLogSchema): Promise<GPSLog[]> => {
    const { from, to, limit, offset } = query
    await validateVehicle(vehicleId)
    const logs = await prisma.gPSLog.findMany({
        where: {
            vehicleId,
            timestamp: {
                gte: new Date(from),
                lte: new Date(to),
            },
        },
        orderBy: { timestamp: 'desc' },
        take: limit,
        skip: offset,
    })
    return logs
}

export const vehicleUsecase = {
    vehicleLastLocation,
    vehicleHistoryLogs
}