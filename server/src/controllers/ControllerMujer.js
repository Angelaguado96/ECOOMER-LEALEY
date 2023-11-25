const { Productos } = require("../DB");

const getWomen = async () => {
  const addWomen = await Productos.findAll({
    where: {
      categoria: "mujer",
    },
  });

  return addWomen;
};

module.exports = { getWomen };
