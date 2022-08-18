const peca = "s";

switch(peca){
    case "cavalo":
        console.log("cavalo realiza movimentos em “L” (duas casas em um sentido e uma casa em sentido perpendicular àquele), para qualquer direção");
        break;
    case "bispo":
        console.log("O movimento do bispo ocorre, assim como no caso das torres, sem limitação de casas, porém apenas no sentido diagonal");
        break;
    case "rainha":
        console.log("A rainha tem livre movimentação no jogo. O rei pode apenas ser movimentado de casa em casa, ainda que em qualquer direção do tabuleiro");
        break;
    default:
    console.log("erro, peça não encontrada");
    


}