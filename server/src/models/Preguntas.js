const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Preguntas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      preguntas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      respuestas: {
        type: DataTypes.STRING,
        allowNull: false,
      },   
    },
    { timestamps: false }
  );

 
};
