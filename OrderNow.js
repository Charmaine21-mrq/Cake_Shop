// Get the cart container and total element
const cartContainer = document.querySelector('.cart-container');
const cartList = document.querySelector('#cart-list');
const totalElement = document.querySelector('#total');

// Initialize the cart and total
let cart = [];
let total = 0.00;

// Add event listener to the add to cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const price = parseFloat(e.target.dataset.price);
    const productName = e.target.parentNode.querySelector('h3').textContent;
    const product = { name: productName, price: price };
    cart.push(product);
    updateCart();
  });
});

// Update the cart and total
function updateCart() {
  cartList.innerHTML = '';
  total = 0.00;
  cart.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    total += product.price;
  });
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}