"use strict";

const DOM = require("./outputData");

let clearBTN = document.getElementById("clearBtn");

DOM.output.addEventListener("click", function(event) {
    if (event.target.className === "delete") {
        console.log("did I click delete?", event.target);
        DOM.userMsgs.splice(DOM.userMsgs.indexOf(event.currentTarget.parentNode.textContent), 1);
        DOM.output.removeChild(event.target.parentNode);
        console.log("what is this?", event.target.parentNode.textContent);
    }
});

clearBTN.addEventListener("click", clearBoard);

function clearBoard() {
    DOM.output.innerHTML = "";
    clearBTN.disabled = "true";
}

module.exports = { clearBTN }; 
