const {Pool} = require("pg");

dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // ssl: {rejectUnauthorized: true}
};

const pool = new Pool(dbConfig);

module.exports = {
    query: (text, params) => pool.query(text, params)
}