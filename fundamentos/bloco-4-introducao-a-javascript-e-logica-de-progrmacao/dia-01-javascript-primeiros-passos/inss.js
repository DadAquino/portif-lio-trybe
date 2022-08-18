const salario = 3000;
let liquidoInss;
let liquidoIr;
if(salario <= 1556.94){
    liquidoInss = salario-(salario*8/100);
}else if(salario <= 2594.92){
    liquidoInss = salario-(salario*9/100);
}else if(salario <= 5189.82){
    liquidoInss = salario-(salario*11/100);
}else{liquidoInss = salario-570.88;}

if(liquidoInss <= 1903.98){
    liquidoIr = liquidoInss;
}else if(liquidoInss <= 2856.65){
    liquidoIr = liquidoInss-((liquidoInss*7.5/100)-142.80);
}else if(liquidoInss <= 3751.05){
    liquidoIr = liquidoInss-((liquidoInss*15/100)-354.80);
}else if(liquidoInss <= 4664.68){
    liquidoIr = liquidoInss-((liquidoInss*22.5/100)-663.13);
}else{liquidoIr = liquidoInss-((liquidoInss*27.5/100)-869.36);}

console.log(liquidoIr);
