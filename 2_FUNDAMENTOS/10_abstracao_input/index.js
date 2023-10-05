// obtém o módulo externo
const inquirer = require('inquirer')

/*  Método 'prompt' é responsável por fazer as perguntas ao usuário
    É passado um array de objetos contentendo perguntas
    Quando tenho uma promisse existem dois métodos: o then e o catch
    Catch serve para imprimir algum erro quando der alguma erro no bloco ou dentro do then
    Then é executado quando o script do bloco anterior executou normalmente
*/
inquirer
  .prompt([
    { name: 'p1', message: 'Qual a primeira nota?' },
    { name: 'p2', message: 'Qual a segunda nota?' },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    console.log(`A média do aluno é ${media}`);
  })
  .catch((err) => {
    console.log(err)
  });