
const { Router } = require("express");
const router = Router();
const { commentAdd,oneComentarios,getComentarios }= require('../handler/handlerComentario')

router.post('/add-comment', commentAdd)
router.get('/add-comment/:id', oneComentarios)
router.get('/add-comment', getComentarios)



module.exports = { router };