import { StatusCodes } from "http-status-codes";
import Store from "../models/Store.js";
import { BadRequestError } from "../utils/custom_errors.js";

export const create_store = async (req, res) => {
  const { name, desc, category } = req.body;
  const store = await Store.create({ name, desc, category });
  if (!store)
    throw new BadRequestError("There was an error creating your store");
  res.status(StatusCodes.OK).json("");
};
