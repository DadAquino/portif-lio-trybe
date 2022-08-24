function somatorio (n){
   let soma=0;
    for(let i=0;i<=n;i+=1) {
        soma+=i;
    }
    return soma;
}

console.log(somatorio(10));