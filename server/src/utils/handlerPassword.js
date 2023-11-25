const bcryptjs=require('bcryptjs'); 
 
 
 
 //  incrpttacion de contraseña  
 const encrypt=async(contraseña)=>{
 
   const hash = await bcryptjs.hash(contraseña,1)
   return hash
 }
//  comaperacion de conreaseña
 const compare = async (contraseña,hashContraseña) => {
    return await  bcryptjs.compare(contraseña,hashContraseña)

 }


 module.exports={encrypt,compare}