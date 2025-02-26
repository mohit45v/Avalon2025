import { Router } from "express";
import {register }from "../controllers/registration.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import {getAllRegistrations} from "../controllers/registration.controller.js";
import {sendRegistrationEmail} from "../controllers/registration.controller.js";
const router= Router();

router.route('/register').post(upload.single("paymentScreenshot"), register);
router.route('/fetchdata').get(getAllRegistrations);
router.route("/send-email").post(sendRegistrationEmail);


export default router;