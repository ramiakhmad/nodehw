import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Books",
    timestamps: false,
  }
);
export default Book;
