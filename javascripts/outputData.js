"use strict";
// let userMsgs = [];
const Msgs = function() {
  var array = [];
  this.getItems = function() {
    return array;
  };
 this.addItem = function(item) {
    array.push(item);
    console.log(array);
 };
 this.removeItem = function(item){
     array.splice(array.indexOf(item), 1);
     console.log(array);
 };
 this.editItem = function(item, newItem){
     array.splice(array.indexOf(item), 1, newItem);
 };
 this.clearItems = function(){
     array = [];
     console.log(array);
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
    <span class='delete'>🗑️</span>
    <span class='edit'>Edit</span>
    </div>`;
    //message stored in a private array
    userMsgs.addItem(message);
    element.scrollTop = output.scrollHeight;
};

const replaceMsg = (element, newMsg)=>{
    element.innerHTML = `<p>${newMsg}</p>
    <span class='delete'>🗑️</span>
    <span class='edit'>Edit</span>`;
    //message stored in a private array
    userMsgs.addItem(newMsg);
    element.scrollTop = output.scrollHeight;
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

module.exports = { userMsgs, addMsg, isEmpty, replaceMsg };


