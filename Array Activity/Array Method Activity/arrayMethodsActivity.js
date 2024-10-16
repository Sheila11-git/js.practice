// Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emi", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);

// Use push() to add "Kiwi" to the fruits array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// Use unshift() to add 4 and 5 to the beginning of array1
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); 

// Use pop() to remove the last element from the fruits array
fruits.pop();
console.log(fruits); 

// Use shift() to remove the first element from array2
const array2 = [1, 2, 3];
array2.shift();
console.log(array2); 

// Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log(fruits); 

// Use slice() to create a new array containing a portion of the fruits array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); 

// Use splice() to insert and remove elements in the months array
const months = ["January", "February", "March", "April"];
months.splice(2, 1, "May"); // Remove "March" and add "May"
console.log(months);
