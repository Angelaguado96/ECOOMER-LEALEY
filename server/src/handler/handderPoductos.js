const { crearProductos,peticionProductos,deliteProductos,soloUnoProducto}=require('../controllers/ControlerProductos')






const getProducto = async  (req, res) => {
  try {
    res.status(200).json(await peticionProductos());
  } catch (error) {
   res.status.send({error:error.message});
  }
};

 const getOneProductos = async (req,res)=>{
     try {
        res.status(200).json(await soloUnoProducto(req));
     } catch (error) { 
       res.status(400).send({error:error.message});
     } 

 }

const postProducto = async (req, res) => {
  try {
    res.status(200).json( await crearProductos(req));
  } catch (error) {
   res.status(400).json({error:error.message});
  }
};

const deleteProducto = (req, res) => {
  try {
    res.status(200).json("esttas en delete");
  } catch (error) {
   res.status.send({error:error.message});
  }
};

module.exports  = {
  deleteProducto,
  getProducto,
  postProducto,
  getOneProductos
};
