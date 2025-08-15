import express from "express";
import { getWorkExperience } from "../controller/workExperience_controller.js";

const router = express.Router();

router.get("/", getWorkExperience);

export default router;