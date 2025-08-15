import { WorkExperience } from "../model/index.js";

export const getWorkExperience = async (req, res) => {
  try {
    const workExperience = await WorkExperience.findAll();
    res.status(200).json(workExperience);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch work experience data" });
  }
};