import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import { env } from './src/environment/environment';
import baseRouter from './src/routes/_base-router';
import { errorHandler } from './src/middleware/error-handler';
import { startGPSLogCleanupJob } from './src/cron/cleaniup-gps-logs';

startGPSLogCleanupJob() // run cronjob in main application

const app = express();
const port = env.PORT

app.use(express.json());

app.use('/api', baseRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});