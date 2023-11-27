const { Router } = require("express");
const router = Router();
const {perdiUsuario,crearUsuarios,modificarUsurarios,deleteUser,VerifyToken} = require("../handler/HandlerUsers");


const {validateUser} =require('../validadores/validaciones')



 
 router.get("/pedir-todoUser", perdiUsuario);

 router.post("/crear-users",validateUser,crearUsuarios);

 router.put("/editat-users", modificarUsurarios);
 
 router.delete("/eliminar-users/:id", deleteUser);

 router.get("/verify", VerifyToken);
 



module.exports = { router };
