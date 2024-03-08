const alunoService = require('../services/aluno');

const getAlunos = async (req, res, next) => {
    try {
        const retorno = await alunoService.getAlunos()
        res.status(200).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const postAlunos = async (req, res, next) => {
    try {
        const retorno = await alunoService.postAlunos(req.body)
        res.status(201).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const deleteAlunos = async (req, res, next) => {
    try {
        const retorno = await alunoService.deleteAlunos(req.params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const putAlunos = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await alunoService.putAlunos(params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}

const patchAlunos = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await alunoService.patchAlunos(params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message);
    }   
}


module.exports.getAlunos = getAlunos
module.exports.postAlunos = postAlunos
module.exports.deleteAlunos = deleteAlunos
module.exports.putAlunos = putAlunos
module.exports.patchAlunos = patchAlunos