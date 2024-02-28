import { Router } from "express";
import { create_store } from "../controllers/store_controller.js";
import { upload } from "../middlewares/multer.js";
import { validate_create_store } from "../middlewares/input_validator.js";

const router = Router();

router
  .route("/create_store")
  .post(upload.single(""), validate_create_store, create_store);

export default router;
