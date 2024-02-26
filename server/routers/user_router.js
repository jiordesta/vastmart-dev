import { Router } from "express";
import { signin, signup } from "../controllers/user_controller.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.route("/signup").post(upload.single(""), signup);
router.route("/signin").post(upload.single(""), signin);

export default router;
