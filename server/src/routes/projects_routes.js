import express from "express";
import {
  getProjectsText,
  createProjectsText,
  updateProjectsText,
  deleteProjectsText,
} from "../controller/projects_controller.js";

const router = express.Router();

router.get("/", getProjectsText);
router.post("/", createProjectsText);
router.put("/:id", updateProjectsText);
router.delete("/:id", deleteProjectsText);

export default router;
