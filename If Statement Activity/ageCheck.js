// Prompt user for their age
let age = prompt("Enter your age:");

// convert the input into a number
age = Number(age);

// check if the input is a valid Number
if (isNaN(age) || age <0) {
    console.log("Invalid age entered.");
} else if (age <13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console,log("You are an adult");
}
