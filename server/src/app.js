//? exporto express
const express =require('express')
const cors = require('cors')
const router= require('./router/index')
const morgan = require('morgan')
const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true
}));
 //?  configuro   para que   expres  pueda entrar imagense 
app.use(fileUpload({
   useTempFiles:true,
   tempFileDirectory:'./uploads'
}))

app.use(router);

module.exports = app;