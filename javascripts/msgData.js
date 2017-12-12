"use strict";
//create new request obj
const outputDOM = require('./outputData');
let msgRequest = new XMLHttpRequest();

function ifXHRFails() {
    console.log('An error occured');
}

function afterLoaded() {
    let msgData = JSON.parse(event.target.responseText);
    console.log('data', msgData.messages);
    msgData.messages.forEach(msg => {
        outputDOM.output.innerHTML += `<p>${msg}</p>`;
    });
}

//listeners for completed request
msgRequest.addEventListener('load', afterLoaded);
msgRequest.addEventListener('error', ifXHRFails);


//tell it which HTTP verb to use: GET, POST, PUT, DELETE, PATCH
msgRequest.open('GET', "messages.json");
//go get it
msgRequest.send();

module.exports =  { afterLoaded };