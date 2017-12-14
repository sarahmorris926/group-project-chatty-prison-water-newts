"use strict";
const outputData = require("./outputData");
const output = document.querySelector("#msg-board");
const userInput = document.getElementById('user-input');
let clearBTN = document.getElementById("clearBtn");


output.addEventListener("click", function (event) {
    let msgTxt = event.target.parentNode.firstElementChild.textContent;
    if (event.target.className === "delete") {
        //on 'delete' press, match msg text with array userMsgs and remove
        outputData.userMsgs.removeItem(msgTxt);
        //remove the parent div of that delete button
        output.removeChild(event.target.parentNode);
    }
});

output.addEventListener('click', function(event) {
    if (event.target.className === "edit") {
        event.target.className = "submit";
    let msgTxt = event.target.parentNode.firstElementChild.textContent;
        outputData.userMsgs.removeItem(msgTxt);
        // change edit button text to Submit
        event.target.textContent = 'Submit';
        // create a dynamic textarea
        let editableText = document.createElement("textarea");
        // fill the textarea with the div's text
        editableText.textContent = msgTxt;
        // replace msg with new text area element
        event.target.parentNode.firstElementChild.replaceWith(editableText);
        editableText.focus();
        event.target.addEventListener('click', function () {
            if (event.target.className === "submit"){
                outputData.replaceMsg(event.target.parentNode, editableText.value);
            }
        });
    }
});

clearBTN.addEventListener("click", clearBoard);

function clearBoard() {
    output.innerHTML = "";
    clearBTN.disabled = true;
    outputData.userMsgs.clearItems();
}

module.exports = { clearBTN };



