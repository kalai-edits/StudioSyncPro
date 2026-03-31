import express from "express"
import { register , login , googleLogin } from "../controllers/authControllers.js";

const router =express.Router()

router.post("/register" , register)    // Setup In PostMan

router.post("/login", login)    // Login APikeys

router.post("/googleLogin", googleLogin)  // google Sign In 


export default router;
