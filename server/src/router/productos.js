const { Router } = require("express");

const router = Router();

const {deleteProducto,getProducto,postProducto,getOneProductos}= require('../handler/handderPoductos')


router.get('/add-productos',getProducto)
router.get('/one-productos/:id',getOneProductos)
router.post('/crear-productos',postProducto)
router.delete('/elimiar-productos/:id',deleteProducto)


 module.exports={router}