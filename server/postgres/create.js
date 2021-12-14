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

exports.createCategoriesTable = async() => {
    try {
        await knex.schema
            .createTable('categories', table => {
                table.increments('id');
                table.string('creator').notNullable();
                table.string('name').notNullable();
                table.enum('type', ['private', 'global']);
                table.foreign('creator').references('username').inTable('users');
            });
        console.log("Categories Table created");
    } catch (e) {
        console.log(e);
    }
};

exports.createKeywordsTable = async() => {
    try {
        await knex.schema
            .createTable('keywords', table => {
                table.increments('id');
                table.integer('category_id').unsigned().notNullable();
                table.string('name').notNullable();
                table.foreign('category_id').references('id').inTable('categories');
            });
        console.log("Keywords Table created");
    } catch (e) {
        console.log(e);
    }
};

exports.createTemplatesTable = async() => {
    try {
        await knex.schema
            .createTable('templates', table => {
                table.increments('id');
                table.string('name').notNullable();
                table.string('creator').notNullable();
                table.string('body').notNullable();
                table.enum('type', ['private', 'global']);
                table.foreign('creator').references('username').inTable('users');
            });
        console.log("Templates Table created");
    } catch (e) {
        console.log(e);
    }
};

exports.createTemplateCategoryRelationTable = async() => {
    try {
        await knex.schema
            .createTable('template_categories', table => {
                table.integer('template_id').unsigned().notNullable();
                table.integer('category_id').unsigned().notNullable();
                table.foreign('template_id').references('id').inTable('templates');
                table.foreign('category_id').references('id').inTable('categories');
                table.primary(['template_id', 'category_id']);
            });
        console.log("Template Categories Table created");
    } catch (e) {
        console.log(e);
    }
};