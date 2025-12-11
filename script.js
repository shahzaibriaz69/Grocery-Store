let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

let shoppingCart = document.querySelector('.shopping-cart');
let cartBtn = document.querySelector('#cart-btn');

let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');

searchBtn.onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active'); 
  loginForm.classList.remove('active');   
};

cartBtn.onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');  
  loginForm.classList.remove('active');   
};

loginBtn.onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');  
  shoppingCart.classList.remove('active'); 
};
