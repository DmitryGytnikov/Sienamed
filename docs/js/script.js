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
