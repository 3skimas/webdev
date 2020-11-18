'use strict';
const $ = function (foo) {
    return document.getElementById(foo);
}
const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}
const rollm = function () {
    let dicedivs = document.getElementsByClassName('die');
    for (let i = 0; i < NOOFDICE; ++i) {
        if (!frozen[i]) {
            let r = roll(6);                // freeze?
            dicedivs[i].innerHTML = r;
            dice[i] = r;                                // record the play?
        }
    }
    
    numbers();
    
    console.log(dice);
    console.log(frozen);
}

const numbers = function (){
    let number1 = document.getElementById('sum1');
    let number2 = document.getElementById('sum2');
    let number3 = document.getElementById('sum3');
    let number4 = document.getElementById('sum4');
    let number5 = document.getElementById('sum5');
    let number6 = document.getElementById('sum6');
    let total = document.getElementById('sum');
    let sum = dice.reduce(function(a, b){
        return a + b;
    }, 0);
    total.innerHTML = sum; 

    const count = dice =>
    dice.reduce((a, b) => ({ ...a,
    [b]: (a[b] || 0) + 1
    }), {})

    console.log('------------');

    console.log(count(dice)[1]);
    console.log(count(dice)[2]);
    console.log(count(dice)[3]);
    console.log(count(dice)[4]);
    console.log(count(dice)[5]);
    console.log(count(dice)[6]);

    console.log('------------');

    if(count(dice)[1] != undefined){
        let ones = count(dice)[1];
        number1.innerHTML = ones;
    }else
        number1.innerHTML = '0';
    if(count(dice)[2] != undefined){
        let twice = count(dice)[2] * 2;
        number2.innerHTML = twice;
    }else
        number2.innerHTML = '0';
    if(count(dice)[3] != undefined){
        let three = count(dice)[3] * 3;
        number3.innerHTML = three;
    }else
        number3.innerHTML = '0';
    if(count(dice)[4] != undefined){
        let four = count(dice)[4] * 4;
        number4.innerHTML = four;
    }else
        number4.innerHTML = '0';
    if(count(dice)[5] != undefined){
        let five = count(dice)[5] * 5;
        number5.innerHTML = five;
    }else
        number5.innerHTML = '0';
    if(count(dice)[6] != undefined){
        let six = count(dice)[6] * 6;
        number6.innerHTML = six;
    }else
        number6.innerHTML = '0';
}

const record = function (btn) {
    btn.removeEventListener('click', play);
    btn.style.backgroundColor = 'red';
    
    console.log('kilroy was here, scoring');
    setTimeout( function () {
        btn.addEventListener('click', play);
        btn.style.backgroundColor = 'white';
        }, 1000);
    // create a function here that scores 1-6'es

    
};

const play = function (e) {
        if (++plays % PLAYS !== 0) {
            console.log('regular');
            rollm();
        } else {
            console.log('record force, record');
            record(e.target);   
        }
};

const freeze = function (e) {
    let i = e.target.id.charAt(e.target.id.length - 1)
    if (frozen[i]) {
        e.target.style.backgroundColor = 'white';
        frozen[i] = false;
    } else {
        e.target.style.backgroundColor = 'lightblue';
        frozen[i] = true;
    }
};

const makeDie = function (i) {
    let die = document.createElement('div');
    die.setAttribute('class', 'die');
    die.setAttribute('id', 'n'+i);
    die.addEventListener('click', freeze);
    return die;
};
const makeButton = function (text, handler) {
    let btn = document.createElement('button');
    let txt = document.createTextNode(text);
    btn.appendChild(txt);
    btn.addEventListener('click', play);
    return btn;
};

const NOOFDICE = 5;
const PLAYS = 3;
let plays = 0;
let dice = [];
let frozen = [];
for (let i = 0; i < NOOFDICE; ++i) {
    dice.push(0);
    frozen.push(false);
}

const doThis = function () {
    for (let i = 0; i < NOOFDICE; ++i) {
        $('diceCup').appendChild(makeDie(i));
    }
    let btn = makeButton('Roll');
    $('main').appendChild(btn);
    $('cpryear').innerHTML = `&copy; nml ${new Date().getFullYear()}`;
    play(btn);   
}

window.addEventListener('load', doThis);