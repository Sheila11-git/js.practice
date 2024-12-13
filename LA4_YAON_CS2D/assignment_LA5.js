// Simple Queueing System

const TABLE_SIZE = 11; // Size of the hash table

// Simple hash function 
function hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i); //Simple hash function
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % TABLE_SIZE; //Ensure positive and within table size
}

// Initialize the hash table.  Null indicates an empty slot.
let customerHashTable = new Array(TABLE_SIZE).fill(null);

// Function to add a customer to the hash table.
function addCustomer() {
  let customerName = prompt("Enter customer name:");
  if (customerName !== null && customerName.trim() !== "") {
    let index = hash(customerName);
    if (customerHashTable[index] === null) { //Check for empty slot
      customerHashTable[index] = customerName;
      alert("Customer added! Queue number: " + (index + 1));
      displayHashTable();
    } else {
      alert("Collision! This slot is already occupied. Try again."); //Handle collisions
    }
  } else {
    alert("Please enter a valid customer name.");
  }
}


// Function to service a customer 
function serviceCustomer() {
  let serviceNumber = parseInt(prompt("Enter queue number to service:"));
  if (!isNaN(serviceNumber) && serviceNumber > 0 && serviceNumber <= TABLE_SIZE) {
    let index = serviceNumber - 1;
    if (customerHashTable[index] !== null) {
      let servicedCustomer = customerHashTable[index];
      customerHashTable[index] = null; //Remove customer
      alert("Serviced customer: " + servicedCustomer);
      displayHashTable();
    } else {
      alert("No customer at that queue number.");
    }
  } else {
    alert("Invalid queue number.");
  }
}

// Function to display the hash table in the console.
function displayHashTable() {
  console.log("Current Hash Table:");
  for (let i = 0; i < TABLE_SIZE; i++) {
    console.log((i + 1) + ". " + (customerHashTable[i] || "Empty")); //Show queue number and customer or "Empty"
  }
}

// Initialize the hash table with sample customers 
customerHashTable[hash("Elaine")] = "Elaine";
customerHashTable[hash("Althea")] = "Althea";
customerHashTable[hash("Angelo")] = "Angelo";
customerHashTable[hash("Lito")] = "Lito";
customerHashTable[hash("Engelbert")] = "Engelbert";
displayHashTable();

// Main loop for user interaction 
while (true) {
  let action = prompt("Choose action:\n1. Add Customer\n2. Service Customer\n3. Exit");
  if (action === "1") {
    addCustomer();
  } else if (action === "2") {
    serviceCustomer();
  } else if (action === "3") {
    break;
  } else {
    alert("Invalid action.");
  }
}

alert("Program ended.");
