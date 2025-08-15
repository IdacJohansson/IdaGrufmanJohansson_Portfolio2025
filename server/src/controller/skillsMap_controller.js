import { SkillsMap } from "../model/index.js";

export const getSkillsMap = async (req, res) => {
  try {
    const skillsMap = await SkillsMap.findAll();
    res.status(200).json(skillsMap);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills map data" });
  }
};
