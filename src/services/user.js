const db = require('../configs/pg')
const cript = require('../utils/salt')

const sql_insert =
` insert into users (username, salt, password)
                values ($1, $2, $3)`

const newUser = async(params) => {
    const {user, pass} = params
    const {salt, hashedPassword} = cript.criarUsuario(pass)
    result = await db.query(sql_insert, [user, salt, hashedPassword])
    return result
}

const sql_get = `select id, username from users`

const getUser = async () => {
    result = await db.query(sql_get, [])
    return {
        total: result.rows.length,
        usuarios: result.rows
    }
}

const sql_delete = `delete from users where id = $1`

const deleteUser = async (params) => {
    console.log(params)
    return await db.query(sql_delete, [params.id])
}

const getUserId = async (id) =>{
    const query = 'SELECT password, salt FROM users WHERE id = $1';
    result = await db.query(query, [id])
    return result.rows[0];
}

const sql_patch =
        `update users
            set `

const patchPassword = async (params) => {
    let binds = []
    const {id, name, pass, newpass} = params
    console.log(params)
    binds.push(id)
    const userData = await getUserId(id)
    console.log('Passo')
    
    let validorPassword = cript.comparePassword(userData.password, userData.salt, pass)
    if(validorPassword){
    let sql = sql_patch
        if (newpass) {
           const {salt, hashedPassword} = cript.criarUsuario(newpass)
           sql += ` password = $2, salt = $3 `
           binds.push(hashedPassword)
           binds.push(salt)
        }
        if (name) {
            sql += ` , username = $4`
            binds.push(name)
         }
        return await db.query(sql + ` where id = $1`)
    }else{
       return "Senha inválida.";
    }
}


module.exports.newUser = newUser
module.exports.getUser = getUser
module.exports.deleteUser = deleteUser
module.exports.patchPassword = patchPassword