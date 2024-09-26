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
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      correo:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      comentario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      puntaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
