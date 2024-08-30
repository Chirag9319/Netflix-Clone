import express from "express";
import { Signin, Login, Logout } from "../controllers/user.js";
const router = express.Router();

router.route("/signin").post(Signin);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
export default router;