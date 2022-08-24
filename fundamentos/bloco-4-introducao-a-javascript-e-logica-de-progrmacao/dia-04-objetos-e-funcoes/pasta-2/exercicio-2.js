function maior(numeros){
    let n=0;
    let k;
    for(k in numeros){
        if(n < numeros[k]){
            n=numeros[k];}
    }
    return k-1; 
}


let a = [2, 3, 6, 7, 10, 1];
console.log(maior(a));
