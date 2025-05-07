import Joi from 'joi'

export const acceptGPSLogSchema = Joi.object({
    vehicleId: Joi.string()
        .uuid()
        .required(),

    latitude: Joi.number()
        .min(-90)
        .max(90)
        .required()
        .messages({
            'number.base': 'latitude must be a number',
            'number.min': 'latitude must be at least -90',
            'number.max': 'latitude must be at most 90',
            'any.required': 'latitude is required',
        }),

    longitude: Joi.number()
        .min(-180)
        .max(180)
        .required()
        .messages({
            'number.base': 'longitude must be a number',
            'number.min': 'longitude must be at least -180',
            'number.max': 'longitude must be at most 180',
            'any.required': 'longitude is required',
        }),

    speed: Joi.number()
        .min(0)
        .required()
        .messages({
            'number.base': 'speed must be a number',
            'number.min': 'speed cannot be negative',
            'any.required': 'speed is required',
        }),

    timestamp: Joi.date()
        .iso()
        .required()
        .messages({
            'date.base': 'timestamp must be a valid ISO date string',
            'any.required': 'timestamp is required',
        }),
}).meta({ className: 'AcceptGPSLogSchema' })
