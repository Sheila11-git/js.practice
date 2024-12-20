// Problem 2 Single Dimensional Array Operations

// Single dimensional array using prompt()
// Prompt user for numbers and names as comma-separated values
const numbersInput = prompt("Enter numbers separated by commas:").trim();// enter the numbers 24, 65, 21, 5, 9, 32, 42, 80, 57
const namesInput = prompt("Enter names separated by comma:").trim(); // enter the names Zenvo, Erica, Jordie, Alicia, Redon

// Convert the input strings into arrays
const numbers = numbersInput.split(",").map(num => Number(num.trim())); // Convert to an array of numbers
const names = namesInput.split(",").map(name => name.trim()); // Trim whitespace from each name

// Merge both arrays into a single array
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort the numbers numerically in reverse order
const sortedNumbers = [...numbers].sort((a, b) => b - a); // Create a copy of numbers array and sort it
console.log("Numbers sorted in reverse order:", sortedNumbers);

// Sort the names alphabetically
const sortedNames = [...names].sort(); // Create a copy of names array and sort it
console.log("Names sorted alphabetically:", sortedNames);
