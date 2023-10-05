/*  modulo que nos permite atribuir cor aos textos do console log */
const chalk = require("chalk");

const nota = 8;

if (nota >= 7) {
    // texto verde em negrito
    console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
    // texto com fundo vermelho de cor preta
    console.log(chalk.bgRed.black("Você precisa fazer a prova final!"));
}