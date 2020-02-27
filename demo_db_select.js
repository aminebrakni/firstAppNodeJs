var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "medicalib",
    database: "mydbnode"
});
// Sélectionnez tous les enregistrements de la table "clients" et affichez l'objet de résultat:
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     });
// });

// Pour sélectionner uniquement certaines des colonnes d'un tableau, utilisez l'instruction "SELECT" suivie du nom de la colonne.

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         //console.log(result);
//         console.log(result[2].address);
//     });
// });

// Le troisième paramètre de la fonction de rappel est un tableau contenant des informations sur chaque champ du résultat.
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        //console.log(fields);
        console.log(fields[1].name);
    });
});