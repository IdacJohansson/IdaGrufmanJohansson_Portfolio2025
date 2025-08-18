import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Projects = sequelize.define(
  "Projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "projects_text",
  }
);

export default Projects;
