// Seller User Authentication
const sellers = [
  { username: 'seller1', password: 'password1' },
  { username: 'seller2', password: 'password2' }
  ];

function authenticateSeller(username, password) {
  return sellers.some(seller => seller.username === username && seller.password === password);
}

// Item Management
const items = {
  pasta: [
    { name: "Spaghetti", price: 150 },
    { name: "Lasagna", price: 180 },
    { name: "Carbonara", price: 160 }
    ],
  desserts: [
    { name: "Gelato", price: 120 },
    { name: "Cheesecake", price: 130 },
    { name: "Brownies", price: 100 }
    ],
  drinks: [
    { name: "Coffee", price: 80 },
    { name: "Tea", price: 70 },
    { name: "Juice", price: 90 }
    ]
};

function addItem(category, name, price) {
  items[category].push({ name, price });
}

function removeItem(category, name) {
  items[category] = items[category].filter(item => item.name !== name);
}

// Customer Ordering
const cart = [];

function addToCart(item, quantity) {
  const existingItem = cart.find(cartItem => cartItem.name === item.name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
}

function removeFromCart(itemName) {
  cart = cart.filter(item => item.name !== itemName);
}

// Custom sorting function (bubble sort)
function sortCartByPrice(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].price > arr[j + 1].price) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements using destructuring
      }
    }
  }
  return arr;
}

function printCart() {
  const sortedCart = sortCartByPrice(cart.slice()); // Create a copy to avoid modifying original cart
  console.log("Your Cart:");
  sortedCart.forEach(item => {
    console.log(`${item.name} (${item.quantity}): ₱${item.price * item.quantity}`);
  });
  const totalPrice = sortedCart.reduce((total, item) => total + item.price * item.quantity, 0);
  console.log("Total Price: ₱", totalPrice);
}

function checkout() {
  // Implement checkout logic here, e.g., display total price, process payment, etc.
  console.log("Checkout initiated. Please pay ₱" + cart.reduce((total, item) => total + item.price * item.quantity, 0));
  cart.length = 0; // Clear the cart
}

// Main Program
function main() {
  while (true) {
    const userType = prompt('Are you a SELLER or CUSTOMER?').toUpperCase();

    if (userType === 'SELLER') {
      const username = prompt('Enter username:');
      const password = prompt('Enter password:');

      if (authenticateSeller(username, password)) {
        while (true) {
          const action = prompt('Do you want to LOGOUT, ADD, or REMOVE an item?').toUpperCase();

          if (action === 'LOGOUT') {
            break;
          }

          const category = prompt('Enter category (Pasta, Desserts, Drinks):').toLowerCase();

          if (action === 'ADD') {
            const name = prompt('Enter item name:');
            const price = parseInt(prompt('Enter item price (₱):'));
            addItem(category, name, price);
            console.log(`Item ${name} added to ${category} category.`);
          } else if (action === 'REMOVE') {
            const name = prompt('Enter item name to remove:');
            removeItem(category, name);
            console.log(`Item ${name} removed from ${category} category.`);
          } else {
            console.log('Invalid action.');
          }
        }
      } else {
        console.log('Invalid username or password.');
      }
    } else if (userType === 'CUSTOMER') {
      while (true) {
        // Display menu
        console.log('Menu:');
        Object.keys(items).forEach(category => {
          console.log(`- ${category}`);
          items[category].forEach(item => {
            console.log(`  - ${item.name}: ₱${item.price}`);
          });
        });

        const choice = prompt('What would you like to do? (Order, Cart, Cancel)');

        if (choice.toLowerCase() === 'order') {
          const category = prompt('Choose a category (Pasta, Desserts, Drinks):');
          const itemName = prompt('Enter item name:');
          const quantity = parseInt(prompt('Enter quantity:'));

          if (items[category]) {
            const item = items[category].find(item => item.name === itemName);
            if (item) {
              addToCart(item, quantity);
              console.log(`${quantity} ${item.name} added to cart.`);
            } else {
              console.log('Item not found.');
            }
          } else {
            console.log('Invalid category. Please choose from Pasta, Desserts, or Drinks.');
          }
        } else if (choice.toLowerCase() === 'cart') {
          while (true) {
            console.log('Your Cart:');
            printCart();
            const cartAction = prompt('What would you like to do? (Add, Remove, Checkout, Cancel)');
            if (cartAction.toLowerCase() === 'add') {
              // Go back to ordering
              break;
            } else if (cartAction.toLowerCase() === 'remove') {
              const itemNameToRemove = prompt('Enter item name to remove:');
              removeFromCart(itemNameToRemove);
            } else if (cartAction.toLowerCase() === 'checkout') {
              checkout();
              break;
            } else if (cartAction.toLowerCase() === 'cancel') {
              break;
            } else {
              console.log('Invalid choice.');
            }
          }
        } else if (choice.toLowerCase() === 'cancel') {
          break;
        } else {
          console.log('Invalid choice.');
        }
      }
    } else {
      alert('Invalid user type.');
    }
  }
}

main();
