const { Login,Usuarios } = require("../DB");
const { encrypt, compare } = require("../utils/handlerPassword");
const { tokenSing } = require("../utils/handlerJwt");




const postLogin = async (req,res) => {
  const { correo, contraseña } = req.body;
  console.log(req.body)
  if (!correo || !contraseña) {
    res.status(400).send({ message: 'Correo y contraseña son requeridos' });
    return;
  }
    const  buscandoCorreo = await Usuarios.findOne({where:{correo}})
    if(!buscandoCorreo ){
      res.status(404).send({message:"NO EXISTE EL CORREO"})
      return;
    }
    const check = await compare(contraseña,buscandoCorreo.contraseña);
    if(check === false){
      res.status(404).send({message:"CONTRASEÑA INCORRECTA"})
      return ;
    }
    const encriptado = await encrypt(contraseña);

    const  token= await tokenSing(buscandoCorreo)
      res.cookie("token",token);
    return {
      id:buscandoCorreo.id,
      correo:buscandoCorreo.correo,
      nombre:buscandoCorreo.nombre,
      token: token,
      contraseña: check,
      imagen:buscandoCorreo.imagenUrl
    };
};

const cerrarSesion =(req,res)=>{
 
  res.cookie("token","",{
    expeires: new Date(0)
  })
  return "cerro sesion"
}



module.exports = { postLogin,cerrarSesion };
