const { check } = require("express-validator");
const { validarResultado } = require("../utils/handlerValidator");

const validateUser = [
  check("nombre").exists().withMessage("no puedo estas  vacio").isString(),
  check("correo").exists().isEmail().withMessage("debe ser un email"),
  check("contraseña").exists(),
  check("edad").exists().isNumeric().withMessage("El campo edad debe ser un número válido"),
  check("telefono").exists().isNumeric().isLength({min :9,max:9}).withMessage(" debe tener  9  digitos "),
  check("talla").exists().isString().withMessage("este campo  debe ser  String"),
  check("marca").exists().isString().withMessage("este campo  debe ser  String"),
  check("interes").exists().isString().withMessage("este campo  debe ser  String"),
  check("genero").exists().isString().withMessage("este campo  debe ser  String"),
  (req, res, next) => {
    return validarResultado(req, res, next);
  },
];

const validateLogin = [
  check("correo")
    .isString()
    .isEmail(),
  check("contraseña").isString(),
  (req, res, next) => {
    return validarResultado(req, res, next);
  },
];

const ValidateCarrusel = [
  check("imgen").exists().withMessage("no debe estas vacio"),
  check("categoria").exists().withMessage("no debe estas vacio"),
  (req, res, next) => {
    return validarResultado(req, res, next);
  },
];



module.exports = { validateUser, validateLogin, ValidateCarrusel };
