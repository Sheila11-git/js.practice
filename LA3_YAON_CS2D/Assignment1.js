// JS if else with Connditional Ternary Operators

// Enter grade
let grade = prompt("Enter your grade:");

// Convert your grade to a number
grade = Number(grade);

// Determine the grade based on the score using the ternary operators
let gradeResult = grade >= 97 ? "1.00 Excellent" :
            grade >= 94 ? "1.25 Excellent" :
            grade >= 91 ? "1.50 Above Average" :
            grade >= 88 ? "1.75 Above Average" :
            grade >= 85 ? "2.00 Average" :
            grade >= 82 ? "2.25 Average" :
            grade >= 79 ? "2.50 Below Average" :
            grade >= 76 ? "2.75 Below Average" :
            grade >= 75 ? "3.00 Below Average" :
            grade >= 72 ? "4.00 Poor" :
            "5.00 Poor" ;
            
// Log the equivalent grade (use backticks for template literals)
console.log(`Your equivalent Grade is ${gradeResult.split(' ')[0]} ${gradeResult.split(' ')[1]}`);

//Determine the final grade using if-else
let remarks;
if (grade >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (grade >= 80) {
  remarks = "AVERAGE PASS"
} else if (grade >= 75) {
  remarks = "LOW PASS"
} else {
  remarks = "FAILED, Needs Improvement";
}

// Log the final remarks (use backticks for template literals)
console.log(`Final Remarks: ${remarks}`);
