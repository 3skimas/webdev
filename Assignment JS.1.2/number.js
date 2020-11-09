'use strict';

let buttonas = document.getElementById('buttonas');

buttonas.onclick = function(){

  let random1 = Math.floor(1 + Math.random() * 6);
  let random2 = Math.floor(1 + Math.random() * 6);
  let random3 = Math.floor(1 + Math.random() * 6);
  let random4 = Math.floor(1 + Math.random() * 6);
  let random5 = Math.floor(1 + Math.random() * 6);

  let number = document.getElementsByTagName('span');

  let dice = [random1, random2, random3, random4, random5];

  var i;
  for (i = 0; i < number.length; i++) {
    number[i].innerHTML = dice[i];
    console.log(dice[i]);
  }
}



