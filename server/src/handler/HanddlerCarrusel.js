
const {modificarCarrusel,createCarrusel, obtenerCarrusel,distroyCarrusel}=require('../controllers/ControllerCarrusel')
const {handlerError}= require('../utils/handlerError')



const getCarrusel= async(req,res)=>{

 try {
    res.status(200).json(await obtenerCarrusel())
 } catch (error) {
  handlerError(res,"ERROR EN GET CARRUSEL",error)
 }

}


const postCarrusel= async (req,res)=>{
 try {

    res.status(200).json(await createCarrusel(req))
 } catch (error) {
  handlerError(res,"ERROR EN POST CARRISEL",error)
 }

}

const putCarrusel= async (req,res)=>{
 try {

    res.status(200).json(await modificarCarrusel())
 } catch (error) {
  handlerError(res,"ERROR EN PUT CARRUSEL",error)
 }

}

const deleteCarrusel= async (req,res)=>{

 try {
  const {id}= req.params
    
    res.status(200).json(await distroyCarrusel(id))
 } catch (error) {
  handlerError(res,"ERROR EN DELETE CARRUSEL",error)
 }

}



module.exports = {getCarrusel,postCarrusel,putCarrusel,deleteCarrusel}