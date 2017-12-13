"use strict";
const outputData = require("./outputData");
const output = document.querySelector("#msg-board");
let clearBTN = document.getElementById("clearBtn");

output.addEventListener("click", function (event) {
    if (event.target.className === "delete") {
        if (event.target.parentNode.className === "msg newMsg"){
            outputData.userMsgs.removeItem(event.target.parentNode.firstElementChild.textContent);
        }
        output.removeChild(event.target.parentNode);
    }
});

clearBTN.addEventListener("click", clearBoard);

function clearBoard() {
    output.innerHTML = "";
    clearBTN.disabled = true;
    outputData.userMsgs.clearItems();
}

module.exports = { clearBTN };


// should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous module


// msgBoard.addEventListener('click', DOM.deleteMsg);

