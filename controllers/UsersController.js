
const Models = require('../models/index');
const UsersController = {};

UsersController.getAllUsers = async (req, res) => {

    try {

        let result = await Models.User.findAll({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún usuario." })
        }

    } catch (error) {
        console.log(error);
    }
}

UsersController.newUser = async (req, res) => {

    try {

        let user = await Models.User.create({
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            RolId: 2
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha añadido con éxito` })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = UsersController;