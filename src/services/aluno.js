const db = require ('../configs/pg')


const sql = 
 `insert into alunos (id, nome, sobrenome, periodo, observacao)
              values ($1, $2, $3, $4, $5)`

const postAlunos = async (params) => {
  const {id, nome, sobrenome, periodo, observacao} = params
  await db.query(sql, [id, nome, sobrenome, periodo, observacao])
}

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
module.exports.postAlunos = postAlunos