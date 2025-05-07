import Joi from 'joi'

export const vehicleHistoryLogSchema = Joi.object({
  limit: Joi.number()
    .integer()
    .min(1)
    .optional()
    .default(10)
    .messages({
      'number.base': 'limit must be a number',
      'number.min': 'limit must be at least 1',
      'number.integer': 'limit must be an integer',
    }),

  offset: Joi.number()
    .integer()
    .min(0)
    .optional()
    .default(0)
    .messages({
      'number.base': 'offset must be a number',
      'number.min': 'offset cannot be negative',
      'number.integer': 'offset must be an integer',
    }),

  from: Joi.date()
    .iso()
    .required()
    .messages({
      'date.base': 'timestampFrom must be a valid ISO date string',
    }),

  to: Joi.date()
    .iso()
    .required()
    .messages({
      'date.base': 'timestampTo must be a valid ISO date string',
    }),
}).meta({ className: 'VehicleHistoryLogSchema' })
