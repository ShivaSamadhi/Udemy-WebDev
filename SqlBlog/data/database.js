const mysql = require(`mysql2`)
//mysql2 package allows the server to access the DB

const pool = mysql.createPool({
    host: `127.0.0.1`,
    user: `root`,
    database: `blog_db`,
    password: 'codeup'
}).promise();
//createPool() takes in a JS obj that cna be used to configure a connection to the DB


module.exports = pool;