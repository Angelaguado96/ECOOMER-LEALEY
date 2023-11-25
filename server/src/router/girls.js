const { Router } = require("express");
const router = Router();


const {addNiña}=require('../handler/HanddlerNiña')



router.get('/todos-girls',addNiña)


module.exports = { router };