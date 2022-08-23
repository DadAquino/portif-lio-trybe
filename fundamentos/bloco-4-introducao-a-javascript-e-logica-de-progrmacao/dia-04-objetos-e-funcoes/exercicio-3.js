function menor(numeros){
    let n=numeros[0];
    let k;
    for(k in numeros){
        if(n > numeros[k]){
            n=numeros[k];}
    }
    return k; 
}


let a = [2, 4, 6, 7, 10, 0, -3];
console.log(menor(a));
