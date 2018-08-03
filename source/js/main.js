'use strict';

// Закрываем окно настроек

var formSettings = document.querySelector('.settings-form');
var buttonCloseSettings = document.querySelector('.settings-form__cancel');

buttonCloseSettings.addEventListener('click', function (evt) {
  evt.preventDefault();

  formSettings.classList.add('settings-form--hidden');
}, false);

// Открытие и закрытие меню

var buttonOpenMenu = document.querySelector('.page-header__menu-open');
var buttonCloseMenu = document.querySelector('.main-nav__close');
var menu = document.querySelector('.main-nav');

buttonOpenMenu.addEventListener('click', function (evt) {
  evt.preventDefault();

  menu.classList.remove('main-nav--closed-js');
  buttonOpenMenu.classList.add('page-header__menu-open--hidden');
}, false);

buttonCloseMenu.addEventListener('click', function (evt) {
  evt.preventDefault();

  menu.classList.add('main-nav--closed-js');
  buttonOpenMenu.classList.remove('page-header__menu-open--hidden');
}, false);
