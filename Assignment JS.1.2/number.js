'use strict';

let buttonas = document.getElementById('buttonas');

buttonas.onclick = function(){

  let random1 = Math.floor(1 + Math.random() * 6);
  let random2 = Math.floor(1 + Math.random() * 6);
  let random3 = Math.floor(1 + Math.random() * 6);
  let random4 = Math.floor(1 + Math.random() * 6);
  let random5 = Math.floor(1 + Math.random() * 6);

  let number1 = document.getElementById('number1');
  let number2 = document.getElementById('number2');
  let number3 = document.getElementById('number3');
  let number4 = document.getElementById('number4');
  let number5 = document.getElementById('number5');

  let dice = [random1, random2, random3, random4, random5];
  console.log(dice);

  number1.innerHTML = dice[0];
  number2.innerHTML = dice[1];
  number3.innerHTML = dice[2];
  number4.innerHTML = dice[3];
  number5.innerHTML = dice[4];

}



