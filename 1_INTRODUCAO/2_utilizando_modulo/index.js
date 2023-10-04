/* importanto o módulo 'File System', que lida com arquivos,
via 'require' e atribuímos uma variável, lembrando
que não vai ser necessário instalar este módulo, pois
estamos utilizando core module do node
*/
const fs = require('fs');

// vamos ler um arquivo
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
if(err) {
console.log(err);
}

console.log(data);
});