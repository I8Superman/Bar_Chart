"use strict";
console.log("JS's in da room!");

const qs = (s) => document.querySelector(s);
// Pre-made array with 30 elements, each with a value form 1-32
const model = [3, 5, 9, 12, 4, 9, 17, 25, 32, 16, 12, 7, 3, 4, 9, 17, 21, 13, 29, 1, 3, 25, 15, 6, 3, 22, 10, 28, 31, 5];
// console.log(model);

loop(); // Starts the whole thing

function loop() { // Runs two functions in sequence that cuts and adds new elements to the array, then displays the modified array
    modifyCode();
    setTimeout(loop, 200);
}

function modifyCode() {
    model.shift()
    const genHeight = Math.floor(Math.random() * 32); // Get random # 1-32 to use as height for the bar
    model.push(genHeight); // The generated # value gets added to the end of the array as an element
    // console.log(model);
    displayData();
}

function displayData() {
    for (let count = 1; count <= (model.length); count++) {
        const getBar = qs('.bar:nth-child(' + count + ')'); // Select the next bar
        getBar.style.height = model[count] + "vh"; // Set height of bar = array element value
        getBar.style.backgroundColor = "rgb(100, " + (150 + model[count] * 2) + ", 237)"; // Set color = to some weird formula where we use the elements value to modify the middel RGB color value!
        // console.log(getBar);
    }
}





// const div = qs(".nr" + 2);
// console.log(div);

// div.style.height = "50px";


