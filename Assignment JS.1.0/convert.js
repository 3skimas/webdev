'use strict';

const c2f = function (){
    let celc;
    let fahr;

    let lower = 0;
    let upper = 300;
    let step = 20;

    let s = '<table>';
    s += '<tr><th>Celsius</th><th>Fahrenheit</th></tr>';
    celc = lower;
    while (celc <= upper) {
        fahr = celc * 9 / 5 + 32;   // the conversion formula
        s += `<tr><td>${celc}</td><td>${fahr.toFixed(2)}</td></tr>`;
        celc = celc + step;
    }
    s += '</table>';
    return s;
}

window.addEventListener('load', c2f);