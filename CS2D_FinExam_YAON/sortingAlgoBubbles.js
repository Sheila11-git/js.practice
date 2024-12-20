// Problem 6...Sorting Algorithm with Bubble Sort
// sortingAlgoBubble.js

// Initialize an empty array to store numbers
const numbers = [];

// Prompt the user to enter 10 numbers
for (let i = 1; i <= 10; i++) {
  const num = Number(prompt(`Enter number ${i}:`).trim());   // Get the users input and convert to a numbers
  numbers.push(num); // Add the entered number to the array
}

// Log the original array
console.log("Original Array:", numbers);

// Bubble Sort Algorithm
const bubbleSort = (arr) => {
  const n = arr.length;     // Get the length of the array
  let swapped;              // track if any elements were swapped
  let comparisonCount = 0; // Track number of comparisons for logging

  console.log("\nSorting Process:");
  for (let i = 0; i < n - 1; i++) {
    swapped = false;      // Reset swapped
    for (let j = 0; j < n - i - 1; j++) {
      // Log the numbers being compared
      console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

      comparisonCount++;
      if (arr[j] > arr[j + 1]) {
        // Swap if the current element is greater than the next
        const temp = arr[j];    // Temporary storage for current elements
        arr[j] = arr[j + 1];    // Assign the next elements
        arr[j + 1] = temp;      // Assign the original current elements
        swapped = true;         // indicating the swap happened

        // Log the array after each swap
        console.log(`Swapped: [${arr.join(", ")}]`);
      }
    }
    // If no swaps occurred, the array is already sorted
    if (!swapped) break;
  }

  console.log(`\nTotal comparisons: ${comparisonCount}`);
  return arr; // Return the sorted array
};

// Sort the numbers using Bubble Sort and log the sorted array
const sortedArray = bubbleSort(numbers);
console.log("\nSorted Array:", sortedArray);
