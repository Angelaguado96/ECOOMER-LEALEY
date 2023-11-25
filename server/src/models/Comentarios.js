const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comentarios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      comentarios : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      puntajes : {
        type: DataTypes.STRING,
        allowNull: false,
      },   
    },
    { timestamps: false }
  );

 
};
