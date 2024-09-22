// Create a variable name (favActorFirstName) and store the favorite actor's first name
let favActorFirstName = "Albert";

// Create a variable name (favActorLastName) and store the last name
let favActorLastName = "Martinez";

// Create a variable name (fullName) and concatenate (favActorFirstName + favActorLastName)
let fullName = favActorFirstName + " " + favActorLastName;

// Create a variable name (uppercase) and CAPITALIZE your fav actor namr
let uppercase = fullName.toUpperCase();

// Create a variable name (message) and store 'My favorite actor is'(favActorName)
let message = "My favorite actor is " + uppercase;

// Append this message to the (message vatiable) 'his best show is TheGeneral'sDaugther'
message += " and her best show is The General's Dauhgter.";

// Log all variables to the console
console.log("First Name:", favActorFirstName);
console.log("Last Name:", favActorLastName);
console.log("Full Name:", fullName);
console.log("Uppercase Name:", uppercase);
console.log("Message:", message);
