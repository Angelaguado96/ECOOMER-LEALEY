const {postLogin,cerrarSesion}= require('../controllers/ControlerLogin')
const {handlerError}= require('../utils/handlerError')







const createLogin=async (req,res)=>{
   try {  
       res.status(200).json(await postLogin(req,res))
   } catch (error) {
        handlerError(res,"ERROR EN CRETAE LOGIN",error)
   }
}

const logout = async (req, res)=>{
try {
    res.status(200).json(await cerrarSesion(req,res))
} catch (error) {
     handlerError(res,"ERROR EN POST LOGOUT",error)
}
}

const perfil = async (req, res) => {
   try {
      
      res.status(200).json('pefile');
      
   } catch (error) {
      handlerError(res,"ERROR EN GET PROFILE",error)
   }
};



module.exports = {createLogin,logout,perfil}