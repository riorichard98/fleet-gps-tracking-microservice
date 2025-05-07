import { Router } from "express";

import authRouter from "./auth-router";
import { invalidRouter } from "../middleware/invalid-route-handler";
import gpsRouter from "./gps-router";
import { authMiddleware } from "../middleware/auth-middleware";
import vehiclesRouter from "./vehicles-router";

const baseRouter = Router();

baseRouter.use('/auth', authRouter);

baseRouter.use(authMiddleware)
baseRouter.use('/gps', gpsRouter);
baseRouter.use('/vehicles', vehiclesRouter);

baseRouter.all('*', invalidRouter);

export default baseRouter;