const { Router } = require("express");
const router = Router();

const  {addHombres}=require('../handler/HanddlerHombre')
const {autorizacion}= require('../middleware/autorizacion')


router.get('/todos-hombres',autorizacion,addHombres)









module.exports = { router };