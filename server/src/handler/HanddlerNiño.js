
const { getNiño } = require("../controllers/ControllerNiños");





const  addNiño = async (req,res)=>{
   try {
      res.status(200).json( await getNiño())
   } catch (error) {
      res.status(400).json({error:error.message});
   }
}



module.exports= {addNiño}