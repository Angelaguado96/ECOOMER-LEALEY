const { Router } = require("express");
const router = Router();




const  {addMujer}=require('../handler/HanddlerMujer')
const {autorizacion}= require('../middleware/autorizacion')


router.get('/todos-mujer',autorizacion ,addMujer)












module.exports = { router };