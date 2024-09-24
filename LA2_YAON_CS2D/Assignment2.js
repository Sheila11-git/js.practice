// Variables
let a = 25;
let b = 20;
let c = 12;
let d = "15";
let e = 15;

// Display the sum of all variables
let sum = a + b + c + Number(d) + e;
console.log(sum);

// Compare the values of variable d and e using rational operators
let greaterThan = Number(d) > e; // Convert d to a number for correct comparison
let lessThan = Number(d) < e;
let greaterThanEqualTo = Number(d) >= e;
let lessThanEqualTo = Number(d) <= e;
let strictEquality = Number(d) === e;

console.log(greaterThan);
console.log(lessThan);
console.log(greaterThanEqualTo);
console.log(lessThanEqualTo);
console.log(strictEquality);

// New variable to store the results of operators
let subtract = a - b - c - Number(d) - e; //to subtract
console.log(subtract);
let multiply = (a*c) / e;
console.log( multiply);
let exponentation = e**c;
console.log( exponentation);

// Assign the value 
let newVar = c[3]; // assign a new variable
console.log(e);
