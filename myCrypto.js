const crypto = require('crypto');

function criarUsuario (usuario, senha){
    const salt = generateSalt()
    const hashedPassword = hashPassword(senha, salt)
}

function generateSalt(){
    return crypto.randomBytes(16).toString('hex');
}

function hashPassword(password, salt){
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

function comparePassword(storedPassword, salt, providedPassword) {
    const hash = hashPassword(providedPassword, salt)
    return hash === storedPassword
}
//const password = '123456';
//const salt = generateSalt();
//const user = 'Renan Schabarum';
//const password = '123456';
//const storedPassword = '1f787d78af2cf9e1e429ea277d96ee00f2291ee72a555191c57a7b335eabc5d3ecc3cd6767d1afe5a38e63c53be59f05e185ed123049d0e0f55f96ac8551059e';
//const salt = 'a257fcd5bb562c834d882ff7024c1509';
//const hashedPassword = hashPassword(password, salt)
//console.log(salt);
//console.log(hashedPassword);
//console.log(comparePassword(storedPassword, salt, password))