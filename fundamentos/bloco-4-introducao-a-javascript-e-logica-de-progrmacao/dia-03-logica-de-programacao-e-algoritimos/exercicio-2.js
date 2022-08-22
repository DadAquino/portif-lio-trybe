let nome = 'tryber';

for(let i=0;i<nome.length-1;i+=1){
    let j=i+1;
    let n = nome[i];
    console.log(n);
    nome[i]= nome[j];
    console.log(nome);
    nome[j]= n;
    console.log(nome[i], nome[j]);
}
console.log(nome);

