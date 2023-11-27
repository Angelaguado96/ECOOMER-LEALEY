
const { getNiñas } = require("../controllers/ControllerNiñas");
const {handlerError}= require('../utils/handlerError')





const  addNiña = async (req,res)=>{
   try {
      res.status(200).json(await getNiñas())
   } catch (error) {
      handlerError(res,"ERROR EN GET NIÑAS",error)
   }
}



module.exports= {addNiña}