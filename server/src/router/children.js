const { Router } = require("express");
const router = Router();
const {addNiño}=require('../handler/HanddlerNiño')
const {autorizacion}= require('../middleware/autorizacion')


router.get('/todos-children',autorizacion,addNiño)





module.exports = { router };