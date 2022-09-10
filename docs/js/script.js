"use strict"

let menuBtn = document.querySelector('.header__menu');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
  console.log('click');
  menuBtn.classList.toggle('header__menu--active');
  menu.classList.toggle('header__nav--active');
})
