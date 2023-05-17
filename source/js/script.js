'use strict';

// Выпадающее окно поиска
let burger = document.querySelector(`.header-top__search-burger`);
let headerSearchBurger = document.querySelector(`.page-search`);
let searchClose = document.querySelector(`.page-search__close`);

burger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  headerSearchBurger.classList.add(`page-search--active`);
});

searchClose.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  headerSearchBurger.classList.remove(`page-search--active`);
});

$(function () {

  // Главный слайдер на main.html
  let slider1 = document.querySelector(`.slider-big`);
  if (slider1) {
    $('.slider-big').slick({
      dots: false,
      // fade: true,
      // autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      prevArrow: $('.slider-big__button--left'),
      nextArrow: $('.slider-big__button--right'),
    });
  }

  // Cлайдер slider-specialists на main.html
  let slider2 = document.querySelector(`.slider-specialists`);
  if (slider2) {
    $('.slider-specialists').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.slider-specialist__button--left'),
      nextArrow: $('.slider-specialist__button--right'),

      // responsive: [{
      //   breakpoint: 1377,
      //   settings: {
      //     slidesToShow: 3,
      //   }
      // }, {
      //   breakpoint: 1090,
      //   settings: {
      //     slidesToShow: 2,
      //   }
      // }, {
      //   breakpoint: 740,
      //   settings: {
      //     slidesToShow: 2,
      //   }
      // }, {
      //   breakpoint: 661,
      //   settings: {
      //     slidesToShow: 2,
      //     centerMode: false,
      //   }
      // }, {
      //   breakpoint: 496,
      //   settings: {
      //     slidesToShow: 3,
      //     centerMode: false,
      //   }
      // }]
    });
  }




});
