/*  
    Importa o modulo 'path'.
    Por convensão sempre atribuímos o módulo a uma constante com o mesmo nome do módulo
*/
const path = require('path');

/*  obtém a extensão de um arquivo */
const extension = path.extname("arquivo.php");
console.log(extension);

