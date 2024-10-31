// Problem 4

// Declare a variable to hold the favorite number
let favNumber = 7;                                 // The user's actual favorite number
let guess;                                        // Store the user's guess

// Use a while loop to ask the user to guess the favorite number
while (true) {
    // Prompt the user for their guess and convert it to a number
    guess = parseInt(prompt("Guess your favorite number:"));

    // Check if the guess is correct
    if (guess === favNumber) {
        console.log("Correct! You've guessed your favorite number!");      // The guess is correct
        break;                                     // Exit the loop
    } else if (guess < favNumber) {
        console.log("Too low! Try again.");        // The guess is too low
    } else {
        console.log("Too high! Try again.");       // The guess is too high
    }
}
