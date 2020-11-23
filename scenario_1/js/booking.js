'use strict';
const $ = function (foo) { return document.getElementById(foo); }

const isLocalStorageEnabled = function () {
    let foo = 'bar';
    try {
        localStorage.setItem(foo, foo);
        localStorage.removeItem(foo);
        return true;
    } catch(e) {
        return false;
    }
}
