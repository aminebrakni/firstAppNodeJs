var mysql = require('mysql');
let con   = require('./db');

// Sélectionnez les enregistrements avec l'adresse «Park Lane 38»:
/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
*/
// Sélectionnez les enregistrements où l'adresse commence par la lettre «S»:
/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
*/

// Échapper les valeurs de requête à l'aide de la mysql.escape() méthode:
/*
con.connect(function(err) {
    if (err) throw err;
    var adr = 'Mountain 21';
    //Escape the address value:
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
*/
//Échapper les valeurs de requête à l'aide de la ? méthode de l'espace réservé :
/*
con.connect(function(err) {
    if (err) throw err;
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    });
});*/

// Plusieurs espaces réservés:
con.connect(function(err) {
    if (err) throw err;
    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    });
})