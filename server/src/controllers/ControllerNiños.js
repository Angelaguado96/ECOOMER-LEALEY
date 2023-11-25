
const { Productos } = require("../DB");

const getNiño = async () => {
   
  const addNiño = await Productos.findAll({
    where: {
      categoria: "niño",
    },
  });

  return addNiño;
};

module.exports = { getNiño };
