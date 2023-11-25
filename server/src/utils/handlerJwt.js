const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const tokenSing = async (buscandoCorreo) => {
   return new Promise((resolve, reject) => {
    const firmar = jwt.sign(
      {
        id: buscandoCorreo.id,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);

      }
    );
    return firmar
  });

 
};


const verificarToken = async (token,req) => {
    return jwt.verify(token, JWT_SECRET,(err,user)=>{
      if(err) return ({message:"TOKEN INVALIDO"})
      console.log(user)
      req.user=user
    });
 
};

module.exports = { tokenSing, verificarToken };
