// Simple Queueing System for Customer Service 

// Initialize the customer queue.
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a new customer to the queue.
function addCustomer() {
  let customerName = prompt("Enter customer name:");
  if (customerName !== null && customerName.trim() !== "") { //Check for empty or null input
    customerQueue.push(customerName); //Add customer to the end of the queue
    alert("Customer added! Queue number: " + (customerQueue.length)); //Show the customer their queue number
    displayQueue(); //Update the display of the queue
  } else {
    alert();
  }
}

// Function to service a customer
function serviceCustomer() {
  let serviceNumber = parseInt(prompt("Enter queue number to service:"));
  if (!isNaN(serviceNumber) && serviceNumber > 0 && serviceNumber <= customerQueue.length) { //Validate input
    let servicedCustomer = customerQueue.splice(serviceNumber - 1, 1)[0]; //Remove customer from queue using splice
    alert("Serviced customer: " + servicedCustomer); //Show who was serviced
    displayQueue(); //Update the display
  } else {
    alert();
  }
}

// Function to display the current queue in the console.
function displayQueue() {
  console.log("Current Queue:");
  if (customerQueue.length === 0) {
    console.log("Queue is empty.");
  } else {
    for (let i = 0; i < customerQueue.length; i++) {
      console.log((i + 1) + ". " + customerQueue[i]); //Show queue number and customer name
    }
  }
}

// Display the initial queue.
displayQueue();

// Main loop to handle user interaction.
while (true) {
  let action = prompt("Choose action:\n1. Add Customer\n2. Service Customer\n3. Exit");
  if (action === "1") {
    addCustomer();
  } else if (action === "2") {
    serviceCustomer();
  } else if (action === "3") {
    break; //Exit the loop
  } else {
    alert();
  }
}

alert("Program ended.");
