const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;



     async function uploadImagen(filePath) {
    // el  filePath   viene de   req.files que es una propiedad dond e esat alojado  la imagen  
        return await cloudinary.uploader.upload(filePath,{
          folder:"Carrusel"
        });
       
 }
 

 cloudinary.config({
   cloud_name: CLOUDINARY_NAME,
   api_key: CLOUDINARY_KEY,
   api_secret: CLOUDINARY_SECRET,
 });
 
 module.exports= {uploadImagen}