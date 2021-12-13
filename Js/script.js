const openCart = document.querySelector('.nav__cart');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.cart__close');
openCart.addEventListener('click', function () {
  cart.classList.toggle('hidden');
});
closeCart.addEventListener('click', function () {
  cart.classList.toggle('hidden');
});
