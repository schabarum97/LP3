const db = require ('../configs/pg')

const sql_get =
    `select id,
            nome,
            sobrenome,
            periodo,
            observacao
       from alunos `

const getAlunos = async () => {
    let aluno = {}
    await db.query(sql_get)
        .then(ret => aluno = {total: ret.rows.length, alunos: ret.rows})
        .catch(err => aluno = err.stack)
    return aluno
}

const sql = 
 `insert into alunos (id, nome, sobrenome, periodo, observacao)
              values ($1, $2, $3, $4, $5)`

const postAlunos = async (params) => {
  const {id, nome, sobrenome, periodo, observacao} = params
  await db.query(sql, [id, nome, sobrenome, periodo, observacao])
}

const sql_delete =
` delete from alunos
   where id = $1 `

const deleteAlunos = async(params) => {
  const {id} = params
  await db.query(sql_delete, [id])
} 

const sql_put = 
` update alunos
     set nome = $2,
         sobrenome = $3,
         periodo = $4,
         observacao = $5
   where id = $1`

const putAlunos = async(params) => {
  const {id, nome, sobrenome, periodo, observacao} = params
  return await db.query(sql_put, [id, nome, sobrenome, periodo, observacao])
}

const sql_patch = 
  `update alunos 
      set `
      
const patchAlunos = async (params) => {
  let fields = ''
  let binds = []
  binds.push(params.id)
  let countParams = 1
  if (params.nome) {
    countParams ++
    fields += ` nome = $${countParams} `
    binds.push(params.nome)
  }
  if (params.sobrenome) {
    countParams ++
    fields += (fields?',':'') + ` sobrenome = $${countParams} `
    binds.push(params.sobrenome)
  }
  if (params.periodo) {
    countParams ++
    fields += (fields?',':'') + ` periodo = $${countParams} `
    binds.push(params.periodo)
  }
  if (params.observacao) {
    countParams ++
    fields += (fields?',':'') + ` observacao = $${countParams} `
    binds.push(params.observacao)
  }
  let sql = sql_patch + fields + ' where id = $1 '
  return await db.query(sql, binds)
}


module.exports.getAlunos = getAlunos
module.exports.postAlunos = postAlunos
module.exports.deleteAlunos = deleteAlunos
module.exports.putAlunos = putAlunos
module.exports.patchAlunos = patchAlunos