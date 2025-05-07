import { Router } from "express";

import { handlerWrapper as h } from "../middleware/handler-wrapper";
import { vehicleHandler } from "../handler/vehicle-handler";

const vehiclesRouter = Router();

vehiclesRouter.get('/:id/last-location', h(vehicleHandler.vehicleLastLocation)); // vehicles last location
vehiclesRouter.get('/:id/history', h(vehicleHandler.vehicleHistoryLogs)); // vehicles histories in time range

export default vehiclesRouter;