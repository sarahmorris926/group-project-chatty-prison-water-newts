"use strict";
const initialMsgs = require('./msgData');
const deleteMsg = require('./deleteMsgs');
const domInput = require('./outputData');
const darkTheme = document.getElementById('darkTheme');
let container = document.querySelector('#container');
let darkDelete = document.getElementsByClassName('delete');

// Dark Theme Event Listener

darkTheme.addEventListener("click", checked);

  function checked() {
    if (darkTheme.checked) {
      container.classList.add("darkTheme");

    } else {
      container.classList.remove("darkTheme");
    }
  }
  






