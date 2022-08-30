// declarando variavel do texto e aplicando consfigurações de local storage
const texto = document.getElementById('texto');
texto.style.backgroundColor = localStorage.getItem('corDeFundo');
texto.style.color = localStorage.getItem('corDoTexto');
texto.style.fontSize = localStorage.getItem('tamanhoDoTexto');

// mudando a cor de fundo do texto
const cores = document.getElementById("cores").children;
for (let i=0;i<cores.length ; i+=1){
    cores[i].addEventListener('click', escolhaDaCor);
}
function escolhaDaCor(evento){
    let cor = evento.target.innerText;
    texto.style.backgroundColor = cor;
    localStorage.setItem('corDeFundo' , cor);
}

// Mudando a cor do texto
const corDoTexto = document.getElementById("corDoTexto").children;

for (let i=0;i<corDoTexto.length ; i+=1){
    corDoTexto[i].addEventListener('click', escolhaCorDoTexto);
}
function escolhaCorDoTexto(evento){
    let cor = evento.target.innerText;
    texto.style.color = cor;
    localStorage.setItem('corDoTexto' , cor);
}

// Mudanto o tamanhdo da fonte

const tamanhoDaFonte = document.getElementById("fonte").children;

for (let i=0;i<tamanhoDaFonte.length ; i+=1){
    tamanhoDaFonte[i].addEventListener('click', fonte);
}
function fonte(evento){
    let tamanho = evento.target.innerText;
    console.log(tamanho);
    texto.style.fontSize = tamanho;
    localStorage.setItem('tamanhoDoTexto' , tamanho);
}