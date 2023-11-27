const { getWomen } = require("../controllers/ControllerMujer");
const {handlerError}= require('../utils/handlerError')





const addMujer = async (req, res) => {
  try {
    res.status(200).json(await getWomen());
  } catch (error) {
    handlerError(res,"ERROR EN GET MUJER",error)
  }
};

module.exports = { addMujer };
