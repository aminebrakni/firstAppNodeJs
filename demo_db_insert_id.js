var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "medicalib",
    database: "mydbnode"
});
// Insérez un enregistrement dans la table "clients" et renvoyez l'ID:
con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});