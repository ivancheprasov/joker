const {knex} = require("./index");

exports.createUsersTable = async () => {
    try {
        await knex.schema
            .createTable('users', table => {
                table.string('username').primary();
                table.string('password');
                table.boolean('is_superuser');
            });
        console.log("Users Table created");
    } catch (e) {
        console.log(e);
    }
};