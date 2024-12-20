// Problem 5... Grocery Items with Stacks
//  groceryStacks.js

// Initialize an empty array to emulate a stack
const groceryStack = [];

// Function to peek at the top of the stack
const peek = () => {
  if (groceryStack.length === 0) {
    console.log("The stack is empty.");   // If the stack is empty, notify the user and return null
    return null;
  } else {
    console.log(`Top of the stack: ${groceryStack[groceryStack.length - 1]}`);   // Display the item on the top
    return groceryStack[groceryStack.length - 1];
  }
};

// Function to push an item onto the stack
const push = (item) => {
  groceryStack.push(item); // Add the item to the stack
  console.log(`Pushed "${item}" onto the stack.`);
  peek(); // Display the top of the stack
  printStack(); // Display the updated stack
};

// Function to pop an item off the stack
const pop = () => {
  if (groceryStack.length === 0) {
    console.log("Cannot pop: The stack is empty.");
    return null;
  } else {
    const removedItem = groceryStack.pop(); // Remove the last item to the stack
    console.log(`Popped "${removedItem}" from the stack.`);
    peek(); // Display the top of the stack
    printStack(); // Display the updated stack
    return removedItem;
  }
};

// Function to display the entire stack
const printStack = () => {
  if (groceryStack.length === 0) {
    console.log("The stack is currently empty.");    // if the stack is empty , notify the user
  } else {
    console.log(`Current Stack: [${groceryStack.join(", ")}]`);   // Display stack in the readable format
  }
};

// 5 grocery items using prompt
for (let i = 1; i <= 5; i++) {
  const item = prompt(`Enter grocery item ${i}:`).trim();
  push(item); // Add each item to the stack
}

// Example stack operations
console.log("\nPerforming some operations on the stack:");
pop(); // Remove the top item
pop(); // Remove another item
push("Eggs"); // Add a new item
