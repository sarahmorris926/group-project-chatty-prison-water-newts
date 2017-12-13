"use strict";
let lgTxt = document.getElementById('largeText');
const msgBoard = document.querySelector("#msg-board");

lgTxt.addEventListener('change', function(){
    if(this.checked){
        msgBoard.style = 'font-size: 1.25em';
    } else {
        msgBoard.style = 'font-size: 1em';
    }
});