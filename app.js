'use strict'

var gender = prompt(`Please enter his/her gender (male or female).`);
var userName = prompt(`Please enter his/her name.`);
console.log(`Hallo ${userName} :)`);
var age = prompt(`Please enter his/her age.`);
var wMessage = confirm(`${userName} do you want to skip Welcoming Message? `);
var x = " ";

// This section for Gender of Customer.

(gender.toLowerCase() === "male") ? console.log(`Hallo ${userName} your Gender is : Male`) :
    (gender.toLowerCase() === "female") ? console.log(`Hallo ${userName} your Gender is : Female`) :
        console.log(`Hallo ${userName}, Please enter a correct answer (male) OR (female)`)
        alert(`Hallo ${userName}, Please enter a correct answer (male) OR (female)`);

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
        x = "Mr";
        alert(`Welcome ${x} ${userName}`);

    } else {
        x = "Ms";
        alert(`Welcome ${x} ${userName}`);
    }
}
