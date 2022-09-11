"use strict"

let menuBtn = document.querySelector('.header__menu');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
  console.log('click');
  menuBtn.classList.toggle('header__menu--active');
  menu.classList.toggle('header__nav--active');
});

$(function () {

  $(".product__star").rateYo({
    starWidth: "14px",
    normalFill: "#121315",
    ratedFill: "#C99E71",
    readOnly: true,
    rating: 3.4
  });

  $(".testimonial__star").rateYo({
    starWidth: "20px",
    normalFill: "#121315",
    ratedFill: "#FAA61A",
    readOnly: true,
    rating: 5
  });

  $(".testimonial__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true
  })

});