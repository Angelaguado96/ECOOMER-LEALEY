const { Router } = require("express");
const router = Router();
const {autorizacion}= require('../middleware/autorizacion')

const {addNiña}=require('../handler/HanddlerNiña')



router.get('/todos-girls', autorizacion ,addNiña)


module.exports = { router };