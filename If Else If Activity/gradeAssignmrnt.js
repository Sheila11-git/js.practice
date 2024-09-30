// gradeAssignment.js

// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Initialize a variable to hold the grade message
let gradeMessage;

// Use else if statements to determine the grade
if (score >= 90) {
    gradeMessage = "Excellent";
} else if (score >= 80) {
    gradeMessage = "Good";
} else if (score >= 70) {
    gradeMessage = "Fair";
} else {
    gradeMessage = "Needs Improvement";
}

// Log the corresponding grade to the console
console.log(`Your grade is: ${gradeMessage}`);
