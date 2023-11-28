

 const handlerError =(res,error ,errorRaw)=>{
   console.log(errorRaw)
   const errorDetail={
       message:error.message,
       stack:error.stack
   }
   res.status(400).json({error:errorDetail})

 }

  module.exports ={handlerError}