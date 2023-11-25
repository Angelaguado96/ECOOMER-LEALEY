const { Productos } = require("../DB");

const getNiñas = async () => {
  const addNiña = await Productos.findAll({
    where: {
      categoria: "niña",
    },
  });

  return addNiña;
};

module.exports = { getNiñas };
