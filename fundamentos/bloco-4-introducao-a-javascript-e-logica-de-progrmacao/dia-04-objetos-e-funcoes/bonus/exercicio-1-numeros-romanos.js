function algarismo(numero){
    
//biblioteca de números romanos
    
    let numerosRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 }
    let caracteres = [];
    let n=0;


//for para separar os caracteres do número recebido

    for(let key in numero){
        caracteres[key] = numero[key];}


// tranformando algarismos em números
    
    for(let i=0;i<caracteres.length;i+=1){
        for(let key in numerosRomanos){
            if(key==caracteres[i]){
                caracteres[i]=numerosRomanos[key]; } } }
                

// fazendo operações lógicas para retornar o número final
    
    for(let i=0;i<caracteres.length;i+=1){
        let j=i+1;
        if(caracteres[i]<caracteres[j]){
            caracteres[i]=caracteres[j]-caracteres[i];
            caracteres.splice(j, 1); }
        }


// loop para somar os números
    
    for(let key in caracteres){
        n=n+caracteres[key];
    }
    return n;
}


console.log(algarismo('XCIX'));