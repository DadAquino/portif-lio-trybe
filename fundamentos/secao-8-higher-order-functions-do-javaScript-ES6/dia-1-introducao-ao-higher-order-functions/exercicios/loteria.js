/* Desenvolva uma HOF que retorna o resultado de um sorteio.
Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma
função que checa se o número apostado é igual ao número sorteado.
O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). */


const check =  (aposta, sorteio) => (aposta === sorteio) ? console.log('Parabéns você ganhou' , aposta, sorteio) : console.log('Tente novamente', aposta, sorteio);

const random = () => Math.floor(Math.random() * (6 - 1) + 1);

const aposta = (numero) => check(numero, random());

aposta(1);
aposta(2);
aposta(3);
aposta(4);
aposta(5);