function palindromo(word){
    let n= [];
    for(let k in word){
        n[k]=word[k];
    }
    n.reverse();
    n=n.join('');
    console.log(n);
    console.log(word);
    if(n===word){
        return true;
    }else{return false;}
}

console.log(palindromo('somos'));