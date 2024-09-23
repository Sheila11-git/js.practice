// Define a Student class to hold student information
class Student {
    // Constructor to initialize the student's details
    constructor(firstName, middleName, lastName, birthdate, birthplace, address, course, year, dreamJob) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.birthplace = birthplace;
        this.address = address;
        this.course = course;
        this.year = year;
        this.dreamJob = dreamJob;
    }

    // Getter to get the student's full name in uppercase
    get fullNameUppercase() {
        return `${this.firstName.toUpperCase()} ${this.middleName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    }

    // Getter to get the student's full name in lowercase
    get fullNameLowercase() {
        return `${this.firstName.toLowerCase()} ${this.middleName.toLowerCase()} ${this.lastName.toLowerCase()}`;
    }

    // Method to display the student's full information
    displayInfo() {
        const fullNameUpper = this.fullNameUppercase;  // Use getter, no need to call as a method
        const fullNameLower = this.fullNameLowercase;  // Use getter, no need to call as a method

        return `[${fullNameUpper}] was born [${this.birthdate.toUpperCase()}] at [${this.birthplace.toUpperCase()}], ` +
               `and currently living at [${this.address.toUpperCase()}]. ` +
               `[${fullNameLower}] is taking up [${this.course.toUpperCase()}] and dreams to be ` +
               `[${this.dreamJob.toUpperCase()}] after graduation.`;
    }
}

// Create three Student objects
const student1 = new Student(
    "Sheila Mae", "Campilla", "Yaon", "November 26, 2003",
    "Barangay Bigbiga, Santiago, Ilocos Sur, Philippines 2706",
    "Barangay San Nicolas, San Esteban, Ilocos Sur, Philippines 2706",
    "Bachelor of Science in Computer Science", "2nd year", "Machine Learning Engineer"
);

const student2 = new Student(
    "Jennalyn", "Fuentes", "Soliman", "December 19, 2004",
    "Barangay San Nicolas, Candon City, Ilocos Sur, Philippines 2710",
    "Barangay Bagani Gabor, Candon City, Ilocos Sur, Philippines 2710",
    "Bachelor of Science in Computer Science", "2nd year", "Web Developer"
);

const student3 = new Student(
    "Lovely", "Trinidad", "Rigor", "May 17, 2005",
    "Barangay Dan-Ar, Santiago, Ilocos Sur, Philippines 2707",
    "Barangay Dan-Ar, Santiago, Ilocos Sur, Philippines 2707",
    "Bachelor of Arts in English Language", "2nd year", "English Tutor"
);

// Print the information of all three students
console.log(student1.displayInfo());
console.log(student2.displayInfo());
console.log(student3.displayInfo());
