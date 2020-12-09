'use strict';
let button = document.getElementById('btn');
let counter = 1;
let storedSettings;



const writedata = function () {

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let date = document.getElementById('datetime').value;

    const reservation = {
            id: counter,
            name: name,
            surname: surname,
            date: date
    }
    localStorage.setItem('reservation' + counter, JSON.stringify(reservation));

    alert(reservation.name + " thanks for the reservation! We will be waiting for you on " + reservation.date);
}

const getdata = function () {
    for(let i = 0; i < localStorage.length; i++){
        storedSettings = JSON.parse(localStorage.getItem('reservation' + i));
    }
    document.getElementById('result').innerHTML = 'First Name ' + storedSettings.name;

}



window.onload = function () {
    counter = localStorage.length;
}

const run = function(){
    writedata();
    console.log(localStorage.getItem('reservation' + counter));
    counter++;
    
}
button.addEventListener('click',run);