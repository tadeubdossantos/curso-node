/* 
    Vamos usar o módulo 'minimist' que lida com argumentos igual o exemplo anterior e que é dependencia deste
projeto.
    Estamos seguindo a convensão de o nome da constante que está recebendo o módulo ter o mesmo nome do módulo 
*/
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`);
/*
    No console podemos dar o comando:
        node index.js --nome=Tadeu --profissao=Programador
    E vai ser exibido esses argumentos com a notação de array e strings
*/
