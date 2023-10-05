// mais de um valor
const x = 10;
const y = "Algum texto";
const z = [1, 2];

//exibição de variáveis um do lado da outra
console.log(x, y, z);

// contagem de impressões
/*  Técnica de usar crases e uso de '${variavel}' é chamada de template strings */
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);

// variável entre string (interpolação de string)
console.log("O texto é %s, e é um texto simples ", y);

// limpar o console a cada 2 segundos
setTimeout(()=>{
    console.clear();
}, 2000);