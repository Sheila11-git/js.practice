// Arrays to hold students for each subject
let DSA = [];
let PL = [];
let Networks = [];

// Enroll a student in a subject
function enrollStudent(subjectArray, studentName) {
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled.`);
}

// Unenroll a student from a subject
function unenrollStudent(subjectArray) {
    console.log("Currently enrolled students:", subjectArray.join(', '));
    let studentToUnenroll = prompt("Enter the name of the student to unenroll:");
    const index = subjectArray.indexOf(studentToUnenroll);
    if (index !== -1) {
        subjectArray.splice(index, 1);                        // Remove the student from the array
        console.log(`${studentToUnenroll} has been unenrolled.`);
    } else {
        console.log("Student not found.");
    }
}

// Main program loop
while (true) {
    let subjectChoice = prompt("Select a subject to enroll (A) DSA, (B) PL, (C) Networks, (D) Exit").toUpperCase();
    
    if (subjectChoice === 'D') {
        console.log("Exiting the program.");
        console.log("DSA Students:", DSA);
        console.log("PL Students:", PL);
        console.log("Networks Students:", Networks);
        break; // Exit the program
    }

    let selectedSubject;
    switch (subjectChoice) {
        case 'A':
            selectedSubject = DSA;
            break;
        case 'B':
            selectedSubject = PL;
            break;
        case 'C':
            selectedSubject = Networks;
            break;
        default:
            console.log("Invalid choice. Please try again.");
            continue;
    }

    // Operations loop
    while (true) {
        let operationChoice = prompt("Select an option: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit").toUpperCase();

        if (operationChoice === 'D') {
            console.log("Exiting the program.");
            break;
        } else if (operationChoice === 'A') {
            let studentName = prompt("Enter the name of the student to enroll:");
            enrollStudent(selectedSubject, studentName);
        } else if (operationChoice === 'B') {
            unenrollStudent(selectedSubject);
        } else if (operationChoice === 'C') {
            break; // Exit the operations loop to select another subject
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}
