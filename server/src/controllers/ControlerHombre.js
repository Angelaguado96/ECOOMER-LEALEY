const { Productos } = require("../DB");

const getHombre = async () => {
  const addMen = await Productos.findAll({
    where: {
      categoria: "hombre",
    },
  });

  return addMen;
};

module.exports = { getHombre };
