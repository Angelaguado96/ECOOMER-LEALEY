const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Carrito",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nombre: {
        //  nombre del producto
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
          //  pantalon , polo , chompa Etc
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
         isIn:{
            args:[["niño","niña","hombre","mujer"]]
         }
        }
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colores:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      tallaAdulto:{
         type: DataTypes.STRING,
        allowNull: true,
      },
      tallaKit:{
         type: DataTypes.STRING,
        allowNull: true, 
      }
    },
    { timestamps: true }
  );
};
