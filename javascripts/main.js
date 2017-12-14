"use strict";
const initialMsgs = require('./msgData');
const deleteMsg = require('./deleteMsgs');
const domInput = require('./outputData');
const darkTheme = document.getElementById('darkTheme');
let container = document.querySelector('#container');

// Dark Theme Event Listener

darkTheme.addEventListener("click", checked);

  function checked() {
    if (darkTheme.checked) {
      console.log("button is checked");
      container.classList.add("darkTheme");
      // container.style = 'background-color: black; color: white';

    } else {
      console.log("not checked");
      container.classList.remove("darkTheme");
      // container.style = 'background-color: white; color: black;';
    }
  }
  






