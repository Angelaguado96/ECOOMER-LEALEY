const { Router } = require("express");
const router = Router();
const {addNiño}=require('../handler/HanddlerNiño')



router.get('/todos-children',addNiño)





module.exports = { router };