const app = require("./src/app");
const PORT = 3002;
const { conn } = require('./src/DB');

conn
   .sync({ force: false})
  .then(() => console.log("conectado en la base de datos  DB"));
app.listen(PORT, () => {
  console.log(`estas en puerto  ${PORT} `);
});

