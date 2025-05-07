import { Router } from "express";

import { gpsHandler } from "../handler/gps-handler";
import { handlerWrapper as h } from "../middleware/handler-wrapper";

const gpsRouter = Router();

gpsRouter.post('', h(gpsHandler.acceptGPSLog)); // accept gps log

export default gpsRouter;