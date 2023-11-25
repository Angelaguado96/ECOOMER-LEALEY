const { Router } = require("express");
const router = Router();




const  {addMujer}=require('../handler/HanddlerMujer')



router.get('/todos-mujer',addMujer)












module.exports = { router };