// Problem 7&8

// Arrays to hold students for each subject
let DSA = [];
let PL = [];
let Networks = [];

// Function of a student enroll in a subject
function enrollStudent(subjectArray, studentName) {
    // Add the student to the selected subject array
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled.`);
}

// Function of a student unenroll from a subject
function unenrollStudent(subjectArray) {
    // Display currently enrolled students
    console.log("Currently enrolled students:", subjectArray.join(', '));
    
    // Prompt name of the student to unenroll
    let studentToUnenroll = prompt("Enter the name of the student to unenroll:");
    const index = subjectArray.indexOf(studentToUnenroll);
    
    // Check if the student is in the list
    if (index !== -1) {
        // If found, remove the student from the array
        subjectArray.splice(index, 1);
        console.log(`${studentToUnenroll} has been unenrolled.`);
    } else {
        // If not found, notify the user
        console.log("Student not found.");
    }
}

// Main program loop
while (true) {
    // Prompt the user to choose a subject or exit
    let subjectChoice = prompt("Select a subject to enroll (A) DSA, (B) PL, (C) Networks, (D) Exit").toUpperCase();
    
    // Check if the user wants to exit the program
    if (subjectChoice === 'D') {
        console.log("Exiting the program.");
        // Display all enrolled students before exiting
        console.log("DSA Students:", DSA);
        console.log("PL Students:", PL);
        console.log("Networks Students:", Networks);
        break; // Exit the program
    }

    // Determine which subject array to use based on user's choice
    let selectedSubject;
    switch (subjectChoice) {
        case 'A':
            selectedSubject = DSA; // Choose the DSA array
            break;
        case 'B':
            selectedSubject = PL; // Choose the PL array
            break;
        case 'C':
            selectedSubject = Networks; // Choose the Networks array
            break;
        default:
            console.log("Invalid choice. Please try again."); // Handle invalid choices
            continue;
    }

    // Operations loop for the chosen subject
    while (true) {
        // Prompt the user to enroll, unenroll, switch subject, or exit
        let operationChoice = prompt("Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit").toUpperCase();

        // Check if the user wants to exit the program
        if (operationChoice === 'D') {
            console.log("Exiting the program.");
            break;
        } else if (operationChoice === 'A') {
            // Enroll a student in the selected subject
            let studentName = prompt("Enter the name of the student to enroll:");
            enrollStudent(selectedSubject, studentName);
        } else if (operationChoice === 'B') {
            // Unenroll a student from the selected subject
            unenrollStudent(selectedSubject);
        } else if (operationChoice === 'C') {
            // Break out of the operations loop to choose another subject
            break;
        } else {
            // Handle invalid operation choices
            console.log("Invalid choice. Please try again.");
        }
    }
}
