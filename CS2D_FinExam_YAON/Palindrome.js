// Problem 1... String Array Operations

// Prompt the user to enter the two words
const word1 = prompt("Enter the first word: "); // users enter RACECAR
const word2 = prompt("Enter the second word: "); // users enter RECORDER

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Reverse the input strings
const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);

// Log the original and reversed strings to the console
console.log(`Original Word1: ${word1}`);
console.log(`Reversed Word1: ${reversedWord1}`);
console.log(`Original Word2: ${word2}`);
console.log(`Reversed Word2: ${reversedWord2}`);

// Check if the original strings are equivalent to the reversed strings (palindrome check)
const isWord1Palindrome = word1 === reversedWord1;
const isWord2Palindrome = word2 === reversedWord2;

// Log the truth value of the palindrome checks to the console
console.log(`Is Word 1 a palindrome? ${isWord1Palindrome}`);
console.log(`Is Word 2 a palindrome? ${isWord2Palindrome}`);
