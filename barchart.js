"use strict";
console.log("JS's in da room!");

const qs = (s) => document.querySelector(s);

const model = [3, 5, 9, 12, 4, 9, 17, 25, 32, 16, 12, 7, 3, 4, 9, 17, 21, 13, 29, 1, 3, 25, 15, 6, 3, 22, 10, 28, 31, 5];
// console.log(model);

const initQueue = []
const barSize = getRandomNumber();

function getRandomNumber() {
    return Math.floor(Math.random() * 32);
}

// for (let count = 0; count <= 40; count++) {
//     function getRandomNumber() {
//         return Math.floor(Math.random() * 32);
//     }
//     console.log(count);
//     initQueue.push(getRandomNumber());
// }

function init() {

}

function loop() {
}

function getNumberOfCustomers() {

}

function displayData() {
    for (let count = 1; count <= (model.length); count++) {
        const barDiv = qs('.nr' + count);
        barDiv.style.height = model[count] + "%";
        console.log(barDiv);
    }
}

function modifyCode() {
    model.shift()
    model.push(barSize);
    console.log(model);
}

// const div = qs(".nr" + 2);
// console.log(div);

// div.style.height = "50px";


