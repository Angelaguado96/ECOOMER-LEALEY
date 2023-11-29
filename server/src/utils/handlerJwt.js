const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {Usuarios}= require('../DB')

const tokenSing = async (buscandoCorreo) => {
   return new Promise((resolve, reject) => {
    const firmar = jwt.sign(
      {
        id: buscandoCorreo.id,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);

      }
    );
    return firmar
  });

 
};


const verificarToken = async (token,req,res) => {

  const usuarioEncontrado =  jwt.verify(token, JWT_SECRET,async (err,user)=>{
    if(err){
      return ({message:"TOKEN INVALIDO"})
    }
    console.log("yo soy profile " ,user)
    const userFound = await Usuarios.findByPk(user.id);
    if(!userFound){
      res.status(404).send("NO SE ENCONTREO EL USUARIO")
    }
    
    req.user = user
    
      const usu= {
        id:userFound.id,
        nombre: userFound.nombre,
        correo: userFound.correo
      }
      console.log(usu)
      return usu
    });

    return usuarioEncontrado
 
  
};

module.exports = { tokenSing, verificarToken };
