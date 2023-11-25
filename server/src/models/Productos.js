const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Productos",
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
      descripcion: {
         // descripcion del producto 
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
      marca: {
         //  la marca de  empresa
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"QHAPAQ P`ACHA"
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
      tendencia: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isIn: {
            args: [["true", "false"]],
            msg:"el campo solo puede  terner  true o flase"
          },
        },
      },
    },
    { timestamps: false }
  );
};
