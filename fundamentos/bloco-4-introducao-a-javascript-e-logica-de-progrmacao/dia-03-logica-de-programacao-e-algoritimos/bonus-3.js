let n = 5;
for (i=1;i<=5;i+=1){
    let print='';
    
    for(let j=5;j>=i;j-=1){
        print+=" ";}
    
    for(k=1;k<=i;k+=1){
        print+='*';}

    console.log(print);
}