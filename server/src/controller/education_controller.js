import { Education } from "../model/index.js";

export const getEducation = async (req, res) => {
  try {
    const education = await Education.findAll();
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education data" });
  }
};
