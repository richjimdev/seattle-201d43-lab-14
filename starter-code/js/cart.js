/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tBody = document.getElementsByTagName('tbody');
  while (tBody.firstChild) {
    tBody.remove(tBody.firstChild);}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  var tBody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (var j = 0; j < cart.items.items.length; j++) {
    // TODO: Create a TR
    var cartTR = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    var removeBtnTD = document.createElement('td');
    var newBtn = document.createElement('button');
    newBtn.textContent = 'Delete this item';
    removeBtnTD.appendChild(newBtn);
    var quantityTD = document.createElement('td');
    quantityTD.innerText = cart.items.items[j].quantity;
    var name = document.createElement('td');
    quantityTD.innerText = cart.items.items[j].quantity;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tBody.appendChild(cartTR);
    cartTR.appendChild(removeBtnTD);}
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
