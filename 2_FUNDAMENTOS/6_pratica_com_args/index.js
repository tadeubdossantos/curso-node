/*  módulo externo que lida com argumentos */
const minimist = require("minimist");

/* módulo interno que nós criamos */
/* importo o módulo 'soma' e já pego a função dele 'soma' */
const soma = require("./soma").soma;

/* pego cada um dos parametros */
const args = minimist(process.argv.slice(2));
const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

/*  Após os dados dos parametros serem resgatados utilizando o módulo externo aplicamos uma 
operação sobre esses dados usando o modulo interno */
soma(a,b);