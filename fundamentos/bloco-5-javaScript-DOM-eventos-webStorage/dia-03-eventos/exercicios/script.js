function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dias = document.querySelector('#days');
for (let i = 0; i<decemberDaysList.length; i+=1 ){
    let n = document.createElement('li');
    n.className = 'day';
    if(decemberDaysList[i]==24 || decemberDaysList[i]==25 || decemberDaysList[i]==31 ){
        n.className = 'day holiday';
    }
    if(decemberDaysList[i]==4 || decemberDaysList[i]==11 || decemberDaysList[i]==18 || decemberDaysList[i]==25){
        n.className = 'day friday';
    }
    n.innerText = decemberDaysList[i];
   
    dias.appendChild(n);

}

// exercicio 2

let local = document.getElementsByClassName('buttons-container')[0];
let botao = document.createElement('button');
botao.id = 'btn-holiday';
botao.innerText = 'Feriados';
local.appendChild(botao);

// exercicio 3
botao.addEventListener('click' , colorChange);

function colorChange(){
    let dias = document.getElementsByClassName('holiday');
    console.log(dias);
    dias[i].style.backgroundcolor = 'black';
}

