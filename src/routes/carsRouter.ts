import { Router } from "express";
import carController from "../controllers/carsController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import { carSchema, updateCarSchema } from "../schemas/carSchema.js";

const carsRouter = Router();

carsRouter.get("/", carController.getAllCars);
carsRouter.get("/:carId", carController.getSpecificCar);
carsRouter.post("/", validateSchemaMiddleware(carSchema), carController.createCar);
carsRouter.delete("/:carId", carController.deleteCar);
carsRouter.put("/:carId", validateSchemaMiddleware(updateCarSchema), carController.updateCar);

export default carsRouter;