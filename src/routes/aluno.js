const alunoController = require('../controllers/aluno');

module.exports = (app) => {
    app.get('/aluno/:name', alunoController.getAlunos)
    app.post('/aluno', alunoController.postAlunos)
}