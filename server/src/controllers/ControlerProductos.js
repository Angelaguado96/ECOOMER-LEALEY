const { Productos ,Usuarios} = require("../DB");
const { uploadImagen } = require("../servise/claudinary");

const peticionProductos = async () => {
  const data = await Productos.findAll();
  return data;
};

const soloUnoProducto= async(req)=>{
  const {id}= req.params
  const oneProductos = await Productos.findOne({where:{id}})

  return oneProductos

}

const crearProductos = async (req) => {
  const {
    usuarioId,
    nombre,
    descripcion,
    tipo,
    categoria,
    stock,
    precio,
    tendencia,
    imagen,
  } = req.body;


  const creandoProducto = await Productos.create({
    nombre,
    descripcion,
    tipo,
    categoria,
    stock,
    precio,
    tendencia,
    imagen,
  });

  //  relacion el producto con el ususaio
 
    const  usuario = await Usuarios.findByPk(usuarioId) 
    console.log("yoooo",usuario)
  if (usuario){
     await   usuario.addProducto(creandoProducto)
  }

  if (req.files?.imagen) {
    const imagenResualtado = await uploadImagen(req.files.imagen.tempFilePath);

    creandoProducto.imagen = {
      secure_url: imagenResualtado.secure_url,
    };
  }

  await creandoProducto.save();
  return creandoProducto;
};

const deliteProductos = () => {};



module.exports = {
  crearProductos,
  peticionProductos,
  deliteProductos,
  soloUnoProducto
};
