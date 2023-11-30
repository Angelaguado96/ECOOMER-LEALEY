const { crearProductos,peticionProductos,deliteProductos,soloUnoProducto}=require('../controllers/ControlerProductos')
const {handlerError}= require('../utils/handlerError')





const getProducto = async  (req, res) => {
  try {
    res.status(200).json(await peticionProductos());
  } catch (error) {
    handlerError(res,"ERROR EN GET PRODUCTO",error)
  }
};

 const getOneProductos = async (req,res)=>{
     try {
        res.status(200).json(await soloUnoProducto(req));
     } catch (error) { 
      handlerError(res,"ERROR EN GET_ONE PRODUCTO",error)
     } 

 }

const postProducto = async (req, res) => {
  try {
    res.status(200).json( await crearProductos(req));
  } catch (error) {
    handlerError(res,"ERROR EN POST  PRODUCTO",error);
  }
};

const deleteProducto = (req, res) => {
  try {
    res.status(200).json("esttas en delete");
  } catch (error) {
    handlerError(res,"ERROR EN DELETE PRODUCTO",error)
  }
};

module.exports  = {
  deleteProducto,
  getProducto,
  postProducto,
  getOneProductos
};
