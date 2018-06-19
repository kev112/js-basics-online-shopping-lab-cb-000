var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 const itemPrice =  Math.floor(100 * Math.random());
 const item = {itemName: itemName, itemPrice: itemPrice};
 cart = [...cart, item];
 console.log(`${itemName} has been added to your cart.`);
 return `${itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  let message = `In your cart, you have`;
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;

//   cart.map ((item, i) => {
//     message =+ ` ${item.itemName} at $${item.itemPrice}`
//     if (i == cart.length - 2) {
//       message =+ `, and`
//     } else if (i == cart.length - 1) {
//       message =+ `.`
//     } else {
//       message =+ `,`
//     }
//   })
//     return message;
// }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
