const { getHombre } = require("../controllers/ControlerHombre");

const addHombres = async (req, res) => {
  try {
    res.status(200).json(await getHombre());
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { addHombres };
