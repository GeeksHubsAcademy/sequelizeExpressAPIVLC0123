
//Importo método router() de la clase express
const router = require('express').Router();

const UsersRouter = require('./views/UsersRouter');

router.use("/users", UsersRouter);


//Exporto router
module.exports = router;