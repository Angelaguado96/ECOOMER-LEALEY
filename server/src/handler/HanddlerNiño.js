
const { getNiño } = require("../controllers/ControllerNiños");
const {handlerError}= require('../utils/handlerError')




const  addNiño = async (req,res)=>{
   try {
      res.status(200).json( await getNiño())
   } catch (error) {
      handlerError(res,"ERROR EN GET NIÑOS",error)
   }
}



module.exports= {addNiño}