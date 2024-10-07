// Prompt the user for the limit of the double loop
let maxLimit = prompt("Enter the Limit of the Double Loop:");

// Convert the input to a number
maxLimit = Number(maxLimit);

// Initialize the counters to zero and set up the loops
for (let i = 0; i <= maxLimit; i++) {
  for (let j = 0; j <= maxLimit; j++) {
    // Add the current values of the counters
    let sum = i + j;

    // Log the corresponding loop points and the added value
    console.log(`[${i}] [${j}] Added value is ${sum}`);
  }
}
