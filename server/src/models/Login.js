const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Login",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: true,
      },   
    },
    { timestamps: false }
  );

 
};
