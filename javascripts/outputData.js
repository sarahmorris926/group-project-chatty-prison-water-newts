"use strict";
// const clearBtn = require('./clearBoard.js');
let userMsgs = [];
const userInput = document.getElementById('user-input');
const output = document.querySelector("#msg-board");


//accepts an element id, user message, then add the user's message - and delete button - to the specified parent element. 
const addMsg = (element, message) => {
    element.innerHTML += `<div class='msg'>
    <p>${message}</p>
    <button class='delete'>Delete</button>
    </div>`;
    //message stored in a private array
    userMsgs.push(message);
    console.log(userMsgs);
};


//check if input is blank or whitespace, `true` if empty
const isEmpty = (str)=> !str.replace(/^\s+/g, '').length; 

//add 'Enter' keypress to input field, clear input
userInput.addEventListener('keypress', function(){
    if(event.keyCode === 13 && !isEmpty(userInput.value)){
        addMsg(output, userInput.value);
        userInput.value = "";
        // clearBtn.enableBtn();
    }
});


//expose a function to read all messages, and delete a single message.
const deleteMsg = ()=> {
    if(event.target.className === 'delete'){
        event.target.parentElement.parentElement
        .removeChild(event.target.parentElement);
    }
};

module.exports = { deleteMsg, userMsgs, output };


