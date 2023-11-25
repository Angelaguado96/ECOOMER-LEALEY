
const {verificarToken} = require('../utils/handlerJwt')


const  autorizacion = (req, res,next)=>{
   const {token }= req.cookies
   if(!token) return res.send("NO SE ENCONTRO TOKEN")
   verificarToken(token,req,res)
   next()
}

module.exports = {autorizacion}
  




