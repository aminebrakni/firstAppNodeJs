var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "medicalib",
    database: "mydbnode"
});
module.exports = con;