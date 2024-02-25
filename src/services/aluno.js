const getAlunos = async (params) => {
    let aluno = {}
    if (params.name === "Renan"){
        aluno.id = 79942
        aluno.nome = "Renan"
        aluno.sobrenome = "Schabarum"
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(8)
    }else{
      throw "Aluno não encontrado!"
    }
    return aluno
} 

module.exports.getAlunos = getAlunos