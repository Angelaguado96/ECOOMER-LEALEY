const { Carrito, Usuarios } = require("../DB");

const addShopping = async (req, res) => {
  const {
    userId,
    nombre,
    tipo,
    imagen,
    categoria,
    stock,
    colores,
    precio,
    tallaAdulto,
    tallaKit,
  } = req.body;

  const newShopping = await Carrito.create({
    nombre,
    tipo,
    imagen,
    categoria,
    stock,
    colores,
    precio,
    tallaAdulto,
    tallaKit,
  });

  const searchUser = await Usuarios.findByPk(userId);
  console.log("sopy usuar", searchUser);
  if (!searchUser) {
   res.status(404).send({message:"NO  FOUND USER "})
  }
  await searchUser.addCarrito(newShopping);

  return newShopping;
};

module.exports = { addShopping };
