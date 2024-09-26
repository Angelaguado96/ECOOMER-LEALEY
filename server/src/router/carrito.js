const { Router } = require("express");
const router = Router();
const {saveCarrrito} = require('../handler/handdlerCarrito')

router.post('/save-purchase' ,saveCarrrito )



module.exports = {router};