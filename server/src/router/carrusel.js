const { Router } = require("express");
const router = Router();
const { ValidateCarrusel } = require('../validadores/validaciones')
const { getCarrusel,postCarrusel ,putCarrusel,deleteCarrusel} = require('../handler/HanddlerCarrusel');



//  rutas del carrusel  de promociones  y de general 

//?http://localhost:3002/carrusel/imagen-carrusel
router.get('/imagen-carrusel',getCarrusel)

//?http://localhost:3002/carrusel/crear-carrusel
router.post('/crear-carrusel',postCarrusel)

// //?http://localhost:3002/carrusel/modificar-carrusel
router.put('/modificar-carrusel' ,putCarrusel)

//?http://localhost:3002/carrusel/eliminar-carrusel
router.delete('/eliminar-carrusel/:id',deleteCarrusel)





module.exports = { router };