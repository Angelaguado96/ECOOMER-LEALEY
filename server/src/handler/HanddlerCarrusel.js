
const {modificarCarrusel,createCarrusel, obtenerCarrusel,distroyCarrusel}=require('../controllers/ControllerCarrusel')




const getCarrusel= async(req,res)=>{

 try {
    res.status(200).json(await obtenerCarrusel())
 } catch (error) {
   res.status(404).send({error:error.message})
 }

}


const postCarrusel= async (req,res)=>{
 try {

    res.status(200).json(await createCarrusel(req))
 } catch (error) {
   res.status(404).send({error:error.message})
 }

}

const putCarrusel= async (req,res)=>{
 try {

    res.status(200).json(await modificarCarrusel())
 } catch (error) {
   res.status(404).send({error:error.message})
 }

}

const deleteCarrusel= async (req,res)=>{

 try {
  const {id}= req.params
    
    res.status(200).json(await distroyCarrusel(id))
 } catch (error) {
   res.status(404).send({error:error.message})
 }

}



module.exports = {getCarrusel,postCarrusel,putCarrusel,deleteCarrusel}