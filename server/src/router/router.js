import { Router } from "express";
import userController from "../controllers/user-controller.js";

const router = new Router()
router.post("/register",userController.registration)
router.post("/login",userController.login)
router.post("/logout", userController.logout)
router.post("/activate/:link",userController.activate)
router.post("/refresh",userController.refresh)
router.post("/getAll",userController.getAll)

export default router