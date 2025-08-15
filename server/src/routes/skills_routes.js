import express from "express";
import { getSkillsMap } from "../controller/skillsMap_controller.js";

const router = express.Router();
router.get("/", getSkillsMap);

export default router;
