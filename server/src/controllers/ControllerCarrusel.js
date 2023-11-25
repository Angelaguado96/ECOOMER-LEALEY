const { Carrusel } = require("../DB");
const { uploadImagen } = require("../servise/claudinary");
// const fs = require("fs-extra"); // para elimar el archivo

//?http://localhost:3002/carrusel/imagen-carrusel

const obtenerCarrusel = async () => {
  const imagen = await Carrusel.findAll();
  return imagen;
};

//?http://localhost:3002/carrusel/crear-carrusel
const createCarrusel = async (req) => {
  
  const { imagen, nombre, categoria } = req.body;

  const infomacion = await Carrusel.create({ imagen, nombre, categoria });
 
  if (req.files?.imagen) {
    const imagenResult = await uploadImagen(req.files.imagen.tempFilePath);

    infomacion.imagen = {
      secure_url: imagenResult.secure_url,
    };
 
  }
  await infomacion.save();
  return { infomacion };
};


const modificarCarrusel = () => {};


const distroyCarrusel = async (id) => {
  
  const buscandoId = await Carrusel.findByPk(id);

  if (buscandoId === null) {
    return "no existe";
  } else {
    const delite = await Carrusel.destroy({ where: { id } });
    return "elimado con exito";
  }
};

module.exports = {
  obtenerCarrusel,
  createCarrusel,
  distroyCarrusel,
  modificarCarrusel,
};
