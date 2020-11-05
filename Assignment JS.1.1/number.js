'use strict';

setInterval(function() {
    let number = Math.floor(1 + Math.random() * 6);

    document.getElementById('number').innerHTML = number;

  },
  3000);
