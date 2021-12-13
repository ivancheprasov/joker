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