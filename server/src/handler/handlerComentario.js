
const {handlerError}= require('../utils/handlerError')
const {postComments,getComentarioOne,allComentarios}= require('../controllers/ControlerComentarios')


const commentAdd =async (req,res)=>{

   try {
      res.status(200).json(await postComments(req,res))
   } catch (error) {
      handlerError(res,"ERROR EN POST COMMENT",error)
   }
}
const oneComentarios =async (req,res)=>{

   try {
      res.status(200).json(await getComentarioOne(req,res))
   } catch (error) {
      handlerError(res,"ERROR EN POST COMMENT",error)
   }
}
const getComentarios =async (req,res)=>{

   try {
      res.status(200).json(await allComentarios(req,res))
   } catch (error) {
      handlerError(res,"ERROR EN POST COMMENT",error)
   }
}



module.exports = {commentAdd,oneComentarios,getComentarios}