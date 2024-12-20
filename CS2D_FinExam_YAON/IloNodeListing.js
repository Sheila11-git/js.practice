// Problem 4...Linked List Operations
// IloNodeListing.js 

// Define the Node class
class Node {
    constructor(value) {
      this.value = value; // Set the value of the node
      this.next = null; // Set the next pointer to null 
    }
  }
  
  // Define the LinkedList class
  class LinkedList {
    constructor() {
      this.head = null; // Initialize the head to null 
      this.size = 0; // Initialize the size of the list to 0
    }
  
    // Append function to add a new node to the list
    append(value) {
      const newNode = new Node(value); // Create a new node with the given value
  
      if (this.head === null) {
        // If the list is empty, set the new node as the head
        this.head = newNode;
      } else {
        // Traverse the list to find the last node
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        // Set the next of the last node to the new node
        current.next = newNode;
      }
  
      this.size++; // Increment the size of the list
      this.print(); // Print the list after appending the new node
    }
  
    // Print function to display the linked list
    print() {
      let current = this.head;
      const values = []; // Collect all node values in an array
      while (current !== null) {
        values.push(current.value); // Add the value of the current node to the array
        current = current.next; // Move to the next node
      }
      console.log(`Linked List: ${values.join(" -> ")}`); // Print the list in a readable format
    }
  }
  
  // Instantiate the LinkedList
  const linkedList = new LinkedList();
  
  // Append the required items
  linkedList.append("Data Structures-Array");
  linkedList.append("Variable Type-integer");
  linkedList.append("Sorting Algorithm-Bubble Sort");
