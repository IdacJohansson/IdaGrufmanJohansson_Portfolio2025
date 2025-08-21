import apiClient from "./apiClient";
import { ENDPOINT } from "./endpoints";

export const getSkills = async () => {
  try {
    const response = await apiClient.get(ENDPOINT.SKILLS_MAP);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch skills data:", error);
    throw error;
  }
};
