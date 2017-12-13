"use strict";

const DOM = require("./outputData.js");

let clearBTN = document.getElementById("clear");

DOM.output.addEventListener("click", function(event) {
    if (event.target.className === "delete") {
        console.log("did I click delete?", event.target);
        DOM.userMsgs.splice(DOM.userMsgs.indexOf(event.currentTarget.parent.textContent), 1);
        DOM.output.removeChild(event.currentTarget.parent);
    }
});

clearBTN.addEventListener("click", clearBoard());

function clearBoard() {
    DOM.output.innerHTML = "";
    clearBTN.disabled = "true";
}

module.exports = { clearBTN }; 
