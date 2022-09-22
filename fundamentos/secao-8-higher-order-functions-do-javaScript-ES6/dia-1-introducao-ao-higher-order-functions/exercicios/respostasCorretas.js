// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const resultado = (gabarito, respostas, pontos) => {
    for (let k in gabarito) {
        console.log(`Sua respota: ${respostas[k]}, Resposta correta: ${gabarito[k]}`);
    }
    console.log(`Pontuação final: ${pontos}`);
}

const check = (gabarito, respostas) => {
    let pontos = 0;
    for (let k in gabarito){
        (gabarito[k] === respostas[k]) ? pontos += 1 : pontos -= 0.5;
    }
    resultado (gabarito, respostas, pontos);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

check (RIGHT_ANSWERS, STUDENT_ANSWERS);