let n;
let numero=500;
for (let i=2;i<=numero;i+=1){
    let cont = 0;

    for(let j=1;j<=i;j+=1){
        if(i%j==0){
            cont+=1;}}
    if (cont==2){
        n=i;}
}
console.log(n);
