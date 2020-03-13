/* ARQUIVO RESPONSÀVEL POR GERENCIAR OS USUÀRIOS NA REDE */


const { createUser } = require('../Users/StoreUser');
const { deleteUser } = require('../Users/DeleteUser');
const { Validation } = require('../Users/Autentication');
const { IndexUser } = require('../Users/IndexUser');

module.exports = {
    createUser,
    deleteUser,
    Validation,
    IndexUser
}


