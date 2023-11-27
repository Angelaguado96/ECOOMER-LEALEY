const { Usuarios } = require("../DB");
const {encrypt} = require('../utils/handlerPassword')
const { tokenSing } = require("../utils/handlerJwt");
const {verificarToken} = require('../utils/handlerJwt')


const getUsers = async () => {
    const  data = await  Usuarios.findAll()
   return data
 
};

const postUsers = async (req,res) => {
     
   const { nombre, correo, contraseña, edad, telefono, talla,marca, interes, genero, imagenUrl } = req.body;
   console.log(req.body)
   const verfiEmail = await Usuarios.findOne({where:{correo}})
   if(verfiEmail) {
    res.status(400).send({message:"EL COREO YA EXISTE"})
      return
   }
   const encriptado = await encrypt(contraseña)

 
      const defecto  = 'https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle-thumbnail.png'

   const buscandoCorreo = await Usuarios.create({
     nombre,
     correo,
     contraseña:encriptado,
     edad,
     telefono,
     talla,
     marca,
     interes,
     genero,
     imagenUrl :imagenUrl ? imagenUrl : defecto
    });
    const token = await tokenSing(buscandoCorreo.id);

    res.cookie("token",token);

   return  {
    id:buscandoCorreo.id,
    nombre:buscandoCorreo.nombre,
    correo :buscandoCorreo.correo,
   token:token, 
   }
  }

  
 

const deleteUsers = async ( id ) => {
    const delite = await Usuarios.destroy({ where: { id } });
    return "elimado con exito";
  }

const  getVerify = async (req, res)=>{
  
 const {token}= req.cookies
 console.log(token)
 if(!token){
  res.status(404).send(({message: "NO ESETAS AUTORIZADO"}))
  return;
 }
 return  verificarToken(token,req)
  
  
  
}


module.exports = { getUsers, postUsers, deleteUsers ,getVerify};
