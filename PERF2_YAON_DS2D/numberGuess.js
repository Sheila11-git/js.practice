// Set a number to be guess
let correctNumber = 7;

// Initialize a variable to store the users guess
let userGuess = null;

// Create a while loop to keep askinv the guess correctly
while (userGuess !== correctNumber) {
// Ask the user fornthere guess
  if (userGuess > correctNumber) {
    console.log("Too High!");
} else if (userGuess < correctNumber) {
    console.log("Too Low!");
} else if (userGuess === correctNumber) {
    console.log("Correct!");
}

}
