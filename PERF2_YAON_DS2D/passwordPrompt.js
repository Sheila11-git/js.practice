const correctPassword = "correctPassword";

let userPassword; // Fix the variable case

// Use do-while loop to prompt
do {
  userPassword = prompt("Enter your password:"); // Make sure this matches in both places
  if (userPassword !== correctPassword) {
    console.log("Incorrect, try again.");
  }
} while (userPassword !== correctPassword); // Fix the condition here

console.log("Access granted");
