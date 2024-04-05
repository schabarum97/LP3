const Alunos = require('./aluno');
const User = require('./user')

module.exports = (app) => {
    Alunos(app)
    User(app)
}