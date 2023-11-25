


const { getNiñas } = require("../controllers/ControllerNiñas");



const  addNiña = async (req,res)=>{
   try {
      res.status(200).json(await getNiñas())
   } catch (error) {
      res.status(400).send({error:error.message});
   }
}



module.exports= {addNiña}