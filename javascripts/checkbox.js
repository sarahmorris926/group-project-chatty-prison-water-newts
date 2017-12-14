"use strict";
let lgTxt = document.getElementById('largeText');
const msgBoard = document.querySelector("#msg-board");
const darkTheme = document.getElementById('darkTheme');
let container = document.getElementById('container');

lgTxt.addEventListener('change', function(){
    if(this.checked){
        msgBoard.style = 'font-size: 1.45em';
    } 
    else {
        msgBoard.style = 'font-size: 1.2em';
    }
});


// Dark Theme Event Listener

darkTheme.addEventListener("click", checked);

  function checked() {
    if (darkTheme.checked) {
      container.classList.add("darkTheme");

    } else {
      container.classList.remove("darkTheme");
    }
  }