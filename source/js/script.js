'use strict';

// Выпадающее окно поиска (кнопки .header-top__search-burger в хедере и
// .header-top__search-burger--services на главной странице)


let burger = document.querySelector(`.header-top__search-burger`);
let headerSearchBurger = document.querySelector(`.page-search`);
let searchClose = document.querySelector(`.page-search__close`);

let burgerServices = document.querySelector(`.header-top__search-burger--services`);

if (burger && headerSearchBurger && searchClose && burgerServices) {// удалить?

  burger.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    headerSearchBurger.classList.add(`page-search--active`);
  });

  searchClose.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    headerSearchBurger.classList.remove(`page-search--active`);
  });

  burgerServices.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    headerSearchBurger.classList.add(`page-search--active`);
  });

}


//Бургер
let burgerMain = document.querySelector(`.header-top__btn`);
let headerBottomMenu = document.querySelector(`.header-bottom`);

burgerMain.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  burgerMain.classList.toggle(`header-top__btn--active`);
  headerBottomMenu.classList.toggle(`header-bottom--active`);
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

      responsive: [{
        breakpoint: 941,
        settings: {
          dots: true,
        }
      }]
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

      responsive: [{
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
        }

      }, {
        breakpoint: 865,
        settings: {
          slidesToShow: 2,
        }

      }]
    });
  }


  // Cлайдер slider-specialists на main.html
  let slider3 = document.querySelector(`.slider-reviews`);
  if (slider3) {
    $('.slider-reviews').slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.slider-reviews__button--left'),
      nextArrow: $('.slider-reviews__button--right'),

      responsive: [{
        breakpoint: 616,
        settings: {
          slidesToShow: 1,
        }
      }]
    });
  }


  // Табы ("Характеристики") на catalog-item-1.html
  $('.tab-1').click(function(e) {
    e.preventDefault();
    $($(this).closest('.basic__services-nav').find('li').find('.tab-1')).removeClass('tab--active-1');
    $($(this).closest('.basic__services').find('.basic-services__content-wr').find('.basic-services__content-list')).removeClass('tabs-content--active-1');

    $(this).addClass('tab--active-1');
    $($(this).attr('href')).addClass('tabs-content--active-1');
  });


  // Выпадающее меню-аккордеон в футере

  if (document.documentElement.clientWidth < 781) {
    // console.log(document.documentElement.clientWidth);
    $(".footer-top__link-title--acc").removeAttr("href");;
    $('.footer-top__link-title--acc').click(function(e) {

      // if($('.footer-top__inner').hasClass('accordion--one')) {
      //   $('.footer-top__link-title--acc').not($(this)).removeClass('accordion--active');
      //   // $('.accordion__link-list').not($(this).next()).slideUp(300);
      //   $('.accordion__link-list').closest('.footer-top__inner').find('.footer-top__hidden').slideUp(300);
      // }

      // $(this).toggleClass('accordion--active').next().slideToggle(300);
      $(this).toggleClass('accordion--active').closest('ul').find('.footer-top__hidden').slideToggle(300);

    });
  }
});
