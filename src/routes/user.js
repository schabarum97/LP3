const usuariosController = require('../controllers/user')

module.exports = (app) => {
    app.post('/user', usuariosController.newUser)
    app.get('/user', usuariosController.getUser)
    app.delete('/user/:id', usuariosController.deleteUser)
}