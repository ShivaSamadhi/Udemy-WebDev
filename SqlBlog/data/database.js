const mysql = require(`mysql2/promise`)
//mysql2 package allows the server to access the DB

const pool = mysql.createPool({
    host: `localhost`,
    database: `blog_db`,
    user: `root`,
    password: `codeup`
});
//createPool() takes in a JS obj that cna be used to configure a connection to the DB

module.exports = pool;