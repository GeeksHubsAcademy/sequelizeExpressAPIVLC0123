const express = require('express');
const app = express();

//Importo el método de conexion a la base de datos
const db = require("./db/db");

const router = require('./router');

const { sequelize } = require("./models/index");
const PORT = 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // sequelize.sync({alter: true})
  
  //Esta línea al conectar la base de datos, sincroniza nuestros modelos en la base de datos
  //creando todo de nuevo, machacando lo anterior, este método es recomendable usarlo SÓLO la primera vez que nos conectamos
  //a la base de datos
  // sequelize.sync({force: true})
  
  
  //El método authenticate va a ser el método que usemos siempre despúes de la primera vez, este método simplemente
  //se conecta a la base de datos y no sobreescribe o sincroniza nada
  db.authenticate()
    .then(() => {
      console.log("Connected to the database, sync is ok");
    })
    .catch((error) => {
      console.log("Error: " + error);
    });

    
})