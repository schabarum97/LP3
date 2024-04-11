const db = require('..config/db')
const jwt = require('jsonwebtoken')
const cript = require('../utils/salt')

const sql_get = 
`select user.username,
        user.salt, 
        user.password
   from user
  where user.username = $1 `

const login = async(params) => {
    const{user, pass} = params
    result = await db.query(sql_get, [user])
    if (!result.rows.length) throw new Error("Usuário não existe")
    else {
        const salt = result.rows[0].salt
        const password = result.rows[0].password
        if (cript.comparePassword(password, salt, pass)){
            let perfilAcesso = result.rows[0].username
            let token = jwt.sign({perfilAcesso}, process.env.PRIVATE_AUTH, {algorithm: 'RS256', expiresIn: '7d'})
            return {
                status: 'Logado com sucesso!',
                user: result.rows[0].username,
                token: token
            }
        } else {
            throw {status: 400, type: 'WARN', message: 'Senha inválida!', detail: ''}
        }
    }
}

module.exports.login = login