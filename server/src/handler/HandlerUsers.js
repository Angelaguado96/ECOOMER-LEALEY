const {
  getUsers,
  postUsers,
  putUSers,
  deleteUsers,
  getVerify,
  getUsersOne
} = require("../controllers/ControlerUsers");
const { handlerError } = require("../utils/handlerError");









const perdiUsuario = async (req, res) => {
  try {
    res.status(200).json(await getUsers(req));
  } catch (error) {
    handlerError(res, "ERROR EN GET USER", error);
  }
};

const getOneUsuario = async (req, res) => {
  try {
    res.status(200).json(await getUsersOne(req,res));
  } catch (error) {
    handlerError(res, "ERROR EN GET-ONE USER", error);
  }
};
//
const crearUsuarios = async (req, res) => {
  try {
    res.status(200).json(await postUsers(req, res));
  } catch (error) {
    handlerError(res, "ERROR EN POST USER", error);
  }
};

const modificarUsurarios = async (req, res) => {
  try {
    res.status(200).json(await putUSers());
  } catch (error) {
    handlerError(res, "ERROR EN PUT USER", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await deleteUsers(id));
  } catch (error) {
    handlerError(res, "ERROR EN DELETE USER", error);
  }
};

const VerifyToken = async (req, res) => {
  try {
    res.status(200).json(await getVerify(req, res));
  } catch (error) {
    handlerError(res, "ERROR EN  VERIFIKE TOKEN  ", error);
  }
};

module.exports = {
  perdiUsuario,
  crearUsuarios,
  modificarUsurarios,
  deleteUser,
  VerifyToken,
  getOneUsuario
};
