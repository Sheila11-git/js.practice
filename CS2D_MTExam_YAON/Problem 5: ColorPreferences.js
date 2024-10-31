// Problem 5

let favoriteColors = [];

// Add your favorite colors directly to the array
favoriteColors.push("Black"); // Your first favorite color
favoriteColors.push("Red");   // Your second favorite color
favoriteColors.push("Blue");  // Your third favorite color

// prompt the user to input three initial colors
for (let i = 0; i < 3; i++) {
    // ask the user for color input and store it 
    let color = prompt(Enter color ${i + 1}:);

    // use push() method to add the entered color to the array
    favoriteColors.push(color);

    // log the updated array to the console
    console.log(Updated favorite colors: ${favoriteColors.join(', ')});

}

// allow the users to add more colors using the push() method
while(true) {
    // prompt user enter new color or type "exit" to finish
    let newColor = prompt("Enter a new color (or type exit to finish):");

    // check if the user wants to exit the loop
    if (newColor.toLowerCase() === 'exit') {
        
        // log a message indicating if the user has finished adding colors
        console.log("Finished adding colors.");
        break;
    }

    // add new color to favoriteColors array
    favoriteColors.push(newColor);

    // log the updated array of the favorite colors to the console
    console.log(Updated favorite colors: ${favoriteColors.join(', ')});
}
