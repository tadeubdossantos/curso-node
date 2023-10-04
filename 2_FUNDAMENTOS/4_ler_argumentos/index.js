/*  No console ao dar o comando: 
    node .\index.js nome=Tadeu idade=30
    onde vamos estar passando argumentos, nos permitindo pegar esse argumento usando 'process.argv' 
*/

/* argumentos existentes */
console.log(process.argv);

/* pega o terceira posição */
const args = process.argv.slice(2);
console.log(args);

/* obtem-se o nome e a idade*/
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];
console.log(nome);
console.log(idade);