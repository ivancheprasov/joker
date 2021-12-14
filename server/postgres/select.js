const {knex} = require("./index");
const _ = require('lodash');

const find = (table, query) => knex(table).where(query).select().limit(1);

exports.selectUser = async (username) => {
    try {
        const users = await find('users', {username});
        return _.isEmpty(users) ? null : users[0];
    } catch (e) {
        console.log(e);
    }
};

exports.selectAvailableCategories = async (username) => {
    try {
        return await knex('categories').where({'creator': username}).orWhere({'type': 'global'}).select('id', 'type', 'name');
    } catch (e) {
        console.log(e);
    }
};

exports.selectTemplates = async (category_id) => {
    try {
        const selectedArray = await knex('template_categories').where({category_id}).select('template_id');
        const templates_id = selectedArray.map(selected => selected.template_id);
        return await knex('templates').whereIn('id', templates_id).select('body');
    } catch (e) {
        console.log(e);
    }
};

exports.selectCategoriesKeyWords = async (categories_id) => {
    try {
        return await knex('keywords').whereIn('category_id', categories_id).select('name', 'category_id');
    } catch (e) {
        console.log(e);
    }
};