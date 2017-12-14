"use strict";
const outputData = require('./outputData');
const output = document.querySelector("#msg-board");
//create new request obj
let msgRequest = new XMLHttpRequest();

function ifXHRFails() {
    console.log('An error occured');
}

function afterLoaded() {
    let msgData = JSON.parse(event.target.responseText);
    // console.log('data', msgData.messages);
    msgData.messages.forEach( (msg, i)=> {
        output.innerHTML += `<div class='msg' id='msg${i}'>
        <p>${msg}</p>
        <button class='delete'>Delete</button>
        </div>`;
        outputData.userMsgs.addItem(msg);
    });
}

//listeners for completed request
msgRequest.addEventListener('load', afterLoaded);
msgRequest.addEventListener('error', ifXHRFails);


//tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
msgRequest.open('GET', "messages.json");
//go get it
msgRequest.send();

// module.exports = { afterLoaded };