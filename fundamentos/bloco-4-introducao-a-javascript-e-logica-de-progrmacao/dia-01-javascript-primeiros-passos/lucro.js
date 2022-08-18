const custo = 40;
const valor = 100;
const vendas = 1000;
const imposto = 20
let lucroLiquido;


lucroLiquido = (valor-(custo+(custo*imposto/100)))*vendas;
console.log(lucroLiquido);
