const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 16],
      },
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    pet_breed: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 20],
      },
    },
    pet_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20, 120],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet",
  }
);

module.exports = Pet;
