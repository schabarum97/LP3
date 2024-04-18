const Alunos = require('./aluno');
const User = require('./user');
const Login = require('./login');

module.exports = (app) => {
    Alunos(app)
    User(app)
    Login(app)
}