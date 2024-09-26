const { getHombre } = require("../controllers/ControlerHombre");
const {handlerError}= require('../utils/handlerError')



const addHombres = async (req, res) => {
  try {
    res.status(200).json(await getHombre(req));
  } catch (error) {
    handlerError(res,"ERROR EN GET HOMBRES",error)
  }
};

module.exports = { addHombres };
