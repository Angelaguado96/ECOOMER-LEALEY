const { getWomen } = require("../controllers/ControllerMujer");

const addMujer = async (req, res) => {
  try {
    res.status(200).json(await getWomen());
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { addMujer };
