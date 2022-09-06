function botao(evento) {
  evento.preventDefault();
}
const bot = document.getElementById('botao');
bot.addEventListener('click', botao); 

function permi() {
    bot.removeAttribute('disabled');
}
const permicao = document.getElementById('chekbox-permissao');
permicao.addEventListener('click', permi);

