import { Car } from "@prisma/client";

import joi from "joi";

export const carSchema = joi.object<Omit<Car, "id" | "createAt">>({
  model: joi.string().required(),
  licensePlate: joi.string().length(7).required(),
  year: joi.number().required(),
  color: joi.string().required()
});

export const updateCarSchema = joi.object<Omit<Car, "id" | "createAt">>({
  model: joi.string(),
  licensePlate: joi.string().length(7),
  year: joi.number(),
  color: joi.string()
});