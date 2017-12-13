"use strict";
// let userMsgs = [];
var Msgs = function() {
  var array = [];
  this.getItems = function() {
    return array;
  };
 this.addItem = function(item) {
    array.push(item);
 };    
};

let userMsgs = new Msgs();


const userInput = document.getElementById('user-input');
const output = document.querySelector("#msg-board");
let clearBTN = document.getElementById("clearBtn");



//accepts an element id, user message, then add the user's message - and delete button - to the specified parent element. 
const addMsg = (element, message) => {
    element.innerHTML += `<div class='msg newMsg'>
    <p>${message}</p>
    <button class='delete'>Delete</button>
    </div>`;
    //message stored in a private array
    userMsgs.addItem(message);
    console.log(userMsgs.getItems());
};


//check if input is blank or whitespace, `true` if empty
const isEmpty = (str)=> !str.replace(/^\s+/g, '').length; 

//add 'Enter' keypress to input field, clear input
userInput.addEventListener('keypress', function(){
    if(event.keyCode === 13 && !isEmpty(userInput.value)){
        addMsg(output, userInput.value);
        userInput.value = "";
        clearBTN.disabled = false;
    }
});

module.exports = { userMsgs };


