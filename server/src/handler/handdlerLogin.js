const {postLogin,cerrarSesion}= require('../controllers/ControlerLogin')

const createLogin=async (req,res)=>{
   try {  
       res.status(200).json(await postLogin(req,res))
   } catch (error) {
      console.error('Error en el servidor:', error);
      res.status(500).send({ message: 'Error en el servidor' });
   }
}

const logout = async (req, res)=>{
try {
    res.status(200).json(await cerrarSesion(req,res))
} catch (error) {
   res.status(400).send('error')
}
}

const perfil = async (req, res) => {
   try {
      
      res.status(200).json('pefile');
      
   } catch (error) {
       res.status(400).json({error: error.message});
   }
};



module.exports = {createLogin,logout,perfil}