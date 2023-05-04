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

// $(function () {

  // Cлайдер main__about-slider на main.html
  // let slider2 = document.querySelector(`.main__about-slider`);
  // if (slider2) {
  //   $('.main__about-slider').slick({
  //     dots: true,
  //     fade: true,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     slidesToShow: 1,
  //     prevArrow: $('.presentation__button-slider--left-1'),
  //     nextArrow: $('.presentation__button-slider--right-1'),
  //   });
  // }


// });
