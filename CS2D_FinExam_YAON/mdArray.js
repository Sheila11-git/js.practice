// Problem 3... Multi Dimensional Array

// Prompt the user to enter names and ages as comma-separated values
const namesInput = prompt("Enter names separated by commas:").trim(); // Guinevieve, Juan, Luna, Gabriel, Elise
const agesInput = prompt("Enter ages separated by commas:").trim(); // 24, 65, 21, 5, 9

// Convert the input strings into arrays
const names = namesInput.split(",").map(name => name.trim()); 
const ages = agesInput.split(",").map(Number); // Convert to an array of numbers

// Initialize an empty array for the restructured multi-dimensional array
const restructuredArray = [];

// Ensure both arrays have the same length
if (names.length !== ages.length) {
  console.error("Error: The number of names and ages must match.");
} else {
  // Combine names and ages into sub-arrays and store them in the restructured array
  for (let i = 0; i < names.length; i++) {
    restructuredArray.push([names[i], ages[i]]);
  }

  // Log the restructured array to the console, one sub-array per line
  console.log("Restructured Array:");
  restructuredArray.forEach(subArray => {
    console.log(subArray);
  });
}
