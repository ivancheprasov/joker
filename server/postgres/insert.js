const {knex} = require("./index");
const {getHash} = require("../helpers");

exports.insertUser = async (username, password) => {
    const hash = getHash(password);
    return knex('users').insert({username, password: hash, is_superuser: false});
};

exports.insertCategory = async (name, username, type) => {
    return knex('categories').insert({creator: username, name, type}, ['id']);
};

exports.insertKeyWord = async (name, category_id) => {
    return knex('keywords').insert({name, category_id});
};

exports.insertTemplate = async (name, username, input, type) => {
    return knex('templates').insert({name, body: input, creator: username, type}, ['id']);
};

exports.insertTemplateCategoryRelation = async (category_id, template_id) => {
    return knex('template_categories').insert({category_id, template_id});
};