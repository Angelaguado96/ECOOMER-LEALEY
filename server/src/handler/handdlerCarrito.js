const {handlerError}= require('../utils/handlerError')
const { addShopping }= require('../controllers/ControllerCars')




const  saveCarrrito = async (req,res)=>{
   try {
      res.status(200).json(await addShopping(req,res))
   } catch (error) {
      console.log(error)
      handlerError(res,"ERRO IN SAVE CARRITO ",error )
   }
}
 module.exports = {saveCarrrito}