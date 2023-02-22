const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Image extends Model {}
// or
// const Image = sequelize.define(
//     "Image",

Image.init(
    {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.BLOB("long"),
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    refrences: {
      Model: "pet",
      Key: "id",
    },
  },
//   whats wrong here
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "image",
  },
});
