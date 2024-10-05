//PART 3

//III. Coding problem
const name = prompt("Please eneter your name:"); //user input
alert("You entered: " + name);
const address = prompt("Please enter your address:");
alert("You entered: " + address);
const age = parseInt(prompt("Please enter your age:"));
alert("You entered: " + age);
const classRole = prompt("Please enter your Class Role (eg. Officer, Student, or Teacher):");
alert("You entered: " + classRole);   
const course = prompt("Please enter your course (eg. BSCS, BSM, BAEL):");
alert("You entered: " + course); 

//to utilized the course
//FOR BSCS class position

const iterations = Math.floor(age / 4); //calculate the number of iteration (1/4 of age)

let roleMessage = "";

if (course === "BSCS") {
    if (classRole === "Officer") {
        console.log("You are a BSCS Officer.");
    } else if (classRole === "Student") {
        console.log("You are a BSCS Student");
    } else if (classRole === "Teacher") {
        console.log("You are a BSCS Teacher");
    } else {
        console.log("Invalid position in BSCS");
    }
}else if (course === "BSM") {
    if (classRole === "Officer") {
        console.log("You are a BSM Officer.");
    } else if (classRole === "Student") {
        console.log("You are a BSM Student");
    } else if (classRole === "Teacher") {
        console.log("You are a BSM Teacher");
    } else {
        console.log("Invalid position in BSM");
    }
}else if (course === "BAEL") {
    if (classRole === "Officer") {
        console.log("You are a BAEL Officer.");
    } else if (classRole === "Student") {
        console.log("You are a BAEL Student");
    } else if (classRole === "Teacher") {
        console.log("You are a BAEL Teacher");
    } else {
        console.log("Invalid position in BAEL");
    }
} else {
    console.log("Course not recognized.");
}

console.log(roleMessage);

for (let i = 0; i < iterations; i++) {
    console.log(name);
}
