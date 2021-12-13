const {knex} = require("./index");
const {getHash} = require("../helpers");

exports.insertUser = async (username, password) => {
    const hash = getHash(password);
    return knex('users').insert({username, password: hash, is_superuser: false});
};