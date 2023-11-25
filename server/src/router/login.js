const { Router } = require("express");
const router = Router();
const {createLogin,logout,perfil} = require('../handler/handdlerLogin')
const {validateLogin} =require('../validadores/validaciones')
const {autorizacion}= require('../middleware/autorizacion')



  //? rutas de   login
  router.post("/user-login",validateLogin,createLogin );
  router.post("/user-logout",logout );
  router.get("/profile",autorizacion,perfil );
 
 


module.exports = { router };
