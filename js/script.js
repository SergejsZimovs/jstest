"use strict";

if (4 == 9) {
    console.log("ok!");
} else {
    console.log("Error");
}

const num1 = 48;

if (num1 < 49) {
    console.log("Error");
} else if (num1 > 100) {
    console.log("too much man");
} else {
    console.log("Ok!");
}

const num2 = 34;
// True             //False
num2 === 48 ? console.log("ok!") : console.log("Error");

const num3 = "55";

switch (num3) {
    case 55:
        console.log("Right!");
        break;
    case 100:
        console.log("Wrong!");
        break;
    case "55":
        console.log("Wrong!");
        break;
    default:
        console.log("Everything is wrong!");
        break;
}
