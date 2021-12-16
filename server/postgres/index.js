const knex = require("knex")({
    client: 'pg',
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST
        // host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
    }
});

module.exports = {
    knex
};