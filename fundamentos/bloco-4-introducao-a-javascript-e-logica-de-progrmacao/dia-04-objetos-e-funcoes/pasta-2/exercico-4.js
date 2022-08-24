function maiorNome(nome){
    let n=nome[0];
    for(let k in nome){
        if(n.length<nome[k].length){
            n=nome[k];}
              }
    return n;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(nomes));