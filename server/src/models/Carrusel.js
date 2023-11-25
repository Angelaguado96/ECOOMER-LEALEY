const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Carrusel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      imagen: {
        type: DataTypes.JSONB,
        allowNull: true,
      
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
       categoria: {                      
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
         isIn:{
            args:[["promociones","general"]]
         }
        },
      },   
    },
    { timestamps: false }
  );

 
};
