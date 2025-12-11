let seachform = document.querySelector('.search-form');
let searchbtn = document.querySelector('#search-btn');
searchbtn.onclick = () =>{
  seachform.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
let cartbtn = document.querySelector('#cart-btn');
cartbtn.onclick = () =>{
  shoppingCart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');
let loginbtn = document.querySelector('#login-btn');  
loginbtn.onclick = () =>{
  loginForm.classList.toggle('active');
}