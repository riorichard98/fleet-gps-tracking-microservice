
export interface LoginResponse {
    token: string
}

export interface AcceptGPSLogResponse {
    logId: string
}

export interface VehicleLastLocationResponse {
    latitude: string | null
    longitude: string | null
}