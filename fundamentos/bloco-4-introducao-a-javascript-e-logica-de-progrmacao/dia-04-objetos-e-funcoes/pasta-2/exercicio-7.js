function equalEnd (word, endWord){
    let c1=0;
    let c2=0;
    let n;
    let contador=0;
    for (let key in word){
        c1+=1
    }
    for (let key in endWord){
        c2+=1
    }
    n=c1-c2;
    console.log(n);
    for (i=n;i<=c1;i+=1){
        let j=i-n;
        console.log(j);
        if(word[i]==endWord[j]){
            contador+=1;
            console.log(contador);
        }
    }
    if(contador==c1-(n-1)){
        return true;
    }else{ return false;}
 
}




console.log(equalEnd('lailane', 'e'));