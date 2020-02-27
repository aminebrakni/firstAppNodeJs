let con   = require('./db');

//Sélectionnez les 5 premiers enregistrements dans le tableau "clients":
/*con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});*/

//Commencez à partir de la position 3 et renvoyez les 5 enregistrements suivants:
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});