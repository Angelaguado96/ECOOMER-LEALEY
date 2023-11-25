const  {getUsers,postUsers,putUSers,deleteUsers}= require('../controllers/ControlerUsers')




const perdiUsuario = async (req, res) => {

   try {
         
      res.status(200).json(await getUsers(req));
      
   } catch (error) {
       res.status(405).send({error: error.message});
   }
};

//  
const crearUsuarios = async(req, res) => {
   
   try {
      res.status(200).json(await postUsers(req,res));
   } catch (error) {
      res.status(400).json({ error:error.message });
   }
};
const modificarUsurarios = async (req, res) => {
   try {
      res.status(200).json(await putUSers());
      
   } catch (error) {
      
   }
};
const deleteUser = async (req, res) => {
   try {
      const {id}=req.params
      res.status(200).json(await deleteUsers(id));
      
   } catch (error) {
       res.status(400).json({error: error.message});
   }
};




module.exports = {
  perdiUsuario,
  crearUsuarios,
  modificarUsurarios,
  deleteUser,
  
};
