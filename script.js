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