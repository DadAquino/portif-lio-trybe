function repetente(numbers){
    let contador=0;
    let alvo=[];
    let n=0;
    for(let k in numbers){
        alvo[k]=numbers[k];
    }
    for (let i=0;i<alvo.length;i+=1){
        let contador1=0;
        for(let j=0;j<alvo.length;j+=1){
            if(alvo[i]===alvo[j]){
                contador1+=1;}}

        if(contador1>contador){
            n=alvo[i];
            console.log(n);
        }
    }
    return n;
}





let numeros = [2, 3, 2, 5, 8, 2, 3];
console.log(repetente(numeros));