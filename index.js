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
  // let message = `In your cart, you have`;
  if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  let message = `In your cart, you have `;
  for (let i = 0; i < cart.length - 1; i++) {
    message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  message += `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  return message;
}
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
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1);
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
