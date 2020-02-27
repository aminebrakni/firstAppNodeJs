var fs = require('fs');

/* La fs.appendFile() méthode ajoute le contenu spécifié à un fichier. Si le fichier n'existe pas, le fichier sera créé: */
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// La fs.open() méthode prend un "drapeau" comme deuxième argument, si le drapeau est "w" pour "écriture", le fichier spécifié est ouvert pour écriture. Si le fichier n'existe pas, un fichier vide est créé:
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// La fs.writeFile() méthode remplace le fichier et le contenu spécifiés s'ils existent. Si le fichier n'existe pas, un nouveau fichier, contenant le contenu spécifié, sera créé:
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// La fs.appendFile() méthode ajoute le contenu spécifié à la fin du fichier spécifié:
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });

// La fs.writeFile() méthode remplace le fichier et le contenu spécifiés:
// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });

// La fs.unlink() méthode supprime le fichier spécifié:
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// La fs.rename() méthode renomme le fichier spécifié:
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});

