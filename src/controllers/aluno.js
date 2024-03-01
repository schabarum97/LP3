const alunoService = require('../services/aluno');

const getAlunos = async (req, res, next) => {
    try {
        const retorno = await alunoService.getAlunos(req.params)
        res.status(201).json(retorno)
    } catch (err){
        res.status(500).send(err)
    }
}

const postAlunos = async (req, res, next) => {
    try {
        const retorno = await alunoService.postAlunos(req.body)
        res.status(201).json(retorno)
    } catch (err){
        res.status(500).send(err)
    }
}

module.exports.getAlunos = getAlunos
module.exports.postAlunos = postAlunos