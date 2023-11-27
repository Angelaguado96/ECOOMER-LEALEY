
const {verificarToken} = require('../utils/handlerJwt')


const  autorizacion = async (req, res,next)=>{
   const {token }= req.cookies
   console.log("autorizado ",token)
    if(!token) return res.send("NO SE ENCONTRO TOKEN")

   try {
    const ususario = await verificarToken(token,req,res)
      req.user= ususario
      next()
      
   } catch (error) {
      console.error('Error al verificar token:', error);
   }
}

module.exports = {autorizacion}
  




