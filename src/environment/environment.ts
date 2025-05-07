import Joi from 'joi';

import { Environment } from './interface';

const envSchema = Joi.object({
    PORT: Joi.number().port().required(),
    JWT_SECRET: Joi.string().required(),
    CLEANUP_LOGS_AFTER_DAYS: Joi.number().required()
}).unknown(true)

// validate env first before exporting it
const { error, value: validatedEnv } = envSchema.validate(process.env, { abortEarly: false });

// if there is is error after validate it then cancel the app
if (error) {
    console.error('Environment variable validation error:', error.details);
    process.exit(1); // Exit the process with failure status

}

// export it as Environment data type
export const env = validatedEnv as Environment;