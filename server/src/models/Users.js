const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      talla: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagenUrl:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      interes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );

 
};
