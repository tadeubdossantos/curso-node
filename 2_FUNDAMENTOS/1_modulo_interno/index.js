/* importa o módulo que se encontra na mesma pasta que este script, e atribue ele a uma
constante. 
Nao é necessário apontar a extensão do arquivo 'js' pois já subentende que é um 'js
Ao informar o que se trata de um módulo interno então é necessário incluir './' depois o nome do módulo, 
pois assim é interpretado que se trata de um caminho relativo */
const meuModulo = require('./meu_modulo');

/* posso atribuir a função que se encontra neste modulo para uma constate, pois assim ao chamar essa função 
podemos fazer isso de forma mais simplificada */
const soma = meuModulo.soma;

/* exemplo do uso do módulo usando de maneira mais simplificada */
soma(2,3);
soma(5,10);

/* ou chamar assim */
meuModulo.soma(10,10);
