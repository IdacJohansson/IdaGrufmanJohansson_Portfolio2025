import { Projects } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getProjectsText = async (req, res) => {
  try {
    const projectsText = await Projects.findAll();
    res.status(200).json(projectsText);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project-text" });
  }
};

export const createProjectsText = async (req, res) => {
  try {
    const newProjectsText = await Projects.create(req.body);
    res.status(201).json({
      message: "Success, you added a new project-text!",
      data: newProjectsText,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create project-text!" });
  }
};

export const updateProjectsText = async (req, res) => {
  try {
    const updateProjects = await Projects.findByPk(req.params.id);
    if (!updateProjects)
      return res.status(404).json({ error: "Project-text not found!" });

    await updateProjects.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateProjects,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update project-text!" });
  }
};

export const deleteProjectsText = async (req, res) => {
  try {
    const destroyProjectsText = await Projects.findByPk(req.params.id);
    if (!destroyProjectsText)
      return res.status(404).json({ error: "Project-text not found!" });

    await destroyProjectsText.destroy();
    res.status(200).json({
      message: "RIP project-text!",
      data: destroyProjectsText,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete project-text!" });
  }
};