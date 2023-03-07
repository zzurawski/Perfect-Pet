// image model
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
    petId: {
      type: DataTypes.INTEGER,
      references: {
        model: "pet",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "image",
  }
);

module.exports = Image;
