'use strict'

var gender = prompt(`Please enter his/her gender (male or female).`);
var userName = prompt(`Please enter his/her name.`);
console.log(`Hallo ${userName} :)`);
var age = prompt(`Please enter his/her age.`);
var wMessage = confirm(`${userName} do you want to skip Welcoming Message? `);
var yourTitel = " ";

// This section for Gender of Customer.

if (gender.toLowerCase() === "male") {

    console.log(`Hallo ${userName} your Gender is : Male`);
} else if (gender.toLowerCase() === "female") {
    console.log(`Hallo ${userName} your Gender is : Female`)
} else {
    console.log(`Hallo ${userName}, Please enter a correct answer (male) OR (female)`)
    alert(`Hallo ${userName}, Please enter a correct answer (male) OR (female)`);
}

/*if (gender.toLowerCase() === "his") {
console.log(`Hallo ${userName} your Gender is : Male`);
} else if (gender.toLowerCase() === "her") {
console.log(`Hallo ${userName} your Gender is : Femal`);
}*/

// This section for Age of Customer.

(age <= 0) ? console.log(`Hallo ${userName}, There is no age less than or equel zero.`) :
    console.log(`Hallo ${userName}, your age is : ${age}.`);

if (wMessage === false) {
    if (gender === "male") {
        yourTitel = "Mr";
        alert(`Welcome ${yourTitel} ${userName}`);

    } else {
        yourTitel = "Ms";
        alert(`Welcome ${yourTitel} ${userName}`);
    }
}

let kursHTML = prompt("Are you Familiar with HTML yes/no?")
let kursCSS = prompt("Are you Familiar with CSS yes/no?")
let kursJS = prompt("Are you Familiar with JS yes/no?")

let storeAnswer = [];

function kHTML() {
}
if (kursHTML.toLowerCase() === "yes" || kursHTML.toLowerCase() === "no") {
    storeAnswer.push(kursHTML);
} else {
    storeAnswer.push("invalid");
}
 
kHTML();

function kCSS() {
    
    if (kursCSS.toLowerCase() === "yes" || kursCSS.toLowerCase() === "no") {
        storeAnswer.push(kursCSS);
    } else {
        storeAnswer.push("invalid");
    }
}

kCSS();

function kJS() {
    
    if (kursJS.toLowerCase() === "yes" || kursJS.toLowerCase() === "no") {
        storeAnswer.push(kursJS);
    } else {
        storeAnswer.push("invalid");
    }
}

kJS();

function printAnswer() {
    return storeAnswer;
};

function print(ans) {
    
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i]);
    }
}
print(storeAnswer); 

printAnswer();
console.log(printAnswer());






