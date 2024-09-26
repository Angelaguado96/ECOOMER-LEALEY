const { Comentarios, Usuarios } = require("../DB");



const postComments = async (req, res) => {

  const { nombre, correo, imagen, comentario, puntaje, UsuarioId } = req.body;

  const coment = await Comentarios.create({
    nombre,
    correo,
    imagen,
    comentario,
    puntaje,
    UsuarioId
  });

  if (!coment) {
    res.status(404).send({ message: "NO SE CREO EL PERSONAJE" });
    return;
  }

  const user = await Usuarios.findByPk(UsuarioId);
  if (!user) {
    res
      .status(404)
      .send({ message: "NO SE ENCONTRO EL USUARIO ASOCIADO AL COMENTARIO" });
    return;
  }

  return coment;
};

const getComentarioOne = async (req, res) => {
   const { id } = req.params;
 
   const usersFound = await Comentarios.findByPk(id, { include: Usuarios});
 
   if (!usersFound) {
     res.status(404).send({ message: "NOT FOUND" });
     return;
   }
   return  [usersFound];
 };

 const allComentarios = async () => {
   const data = await Comentarios.findAll({include: Usuarios});
   return data;
 };





module.exports = { postComments,getComentarioOne,allComentarios };
