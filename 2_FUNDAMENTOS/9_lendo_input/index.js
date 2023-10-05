/*  pegando o módulo a gente já acessa um função dela já passando como parâmetro um objeto com as 
seguintes configurações */
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

/*  Após setadas as configurações já podemos fazer as perguntas para o usuário */
readline.question("Qual a sua linguagem preferencial?", (language) => {
    if(language === 'Python') {
        console.log("Aaaahh! Isso nem linguagem é!!!");
    } else {
        console.log(`A minha linguagem preferida é: ${language}`);
    }
    readline.close();
});