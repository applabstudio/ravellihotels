import 'lazysizes';
import siteHeader from './modules/site-header';
import allclick from './modules/allclick';
import modal from './modules/modal';
import module from './modules/module';

import {MDCTextField} from '@material/textfield';

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const inps = document.querySelectorAll('.mdc-text-field');

inps.forEach(element => {
  new MDCTextField(element);
});

siteHeader.init();
allclick.init();
modal.init();
module.init();

hamburgher();

function hamburgher() {
    document.querySelector('#logo-open').addEventListener('click', function() {
      let logo = document.querySelector('#logo-open');
      let logoh4 = document.querySelector('#logoh4');
      logo.classList.add('uk-invisible');
      logoh4.classList.add('uk-invisible');
    });
    document.querySelector('.uk-close').addEventListener('click', function() {
      let logo = document.querySelector('#logo-open');
      let logoh4 = document.querySelector('#logoh4');
      logo.classList.toggle('uk-invisible');
    });
}

// dynamic imports - swipers
if (document.querySelectorAll('[data-swiper]').length > 0) {
  import(/* webpackChunkName: "swipers" */ './modules/swipers').then(swipers => {
    swipers = swipers.default;

    if (document.querySelectorAll('[data-swiper="hero"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="hero"]'));
      slider.forEach((item) => {
        swipers.initHeroSlider();
      });
    }
    if (document.querySelectorAll('[data-swiper="cards"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="cards"]'));
      slider.forEach((item) => {
        swipers.initCardSlider();
      });
    }
    if (document.querySelectorAll('[data-swiper="image-carousel"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="image-carousel"]'));
      slider.forEach((item) => {
        swipers.initCarousel();
      });
    }
    if (document.querySelectorAll('[data-swiper="video-carousel"]').length > 0) {
      let slider = Array.from(document.querySelectorAll('[data-swiper="video-carousel"]'));
      slider.forEach((item) => {
        swipers.initVideogallery();
      });
    }
  });
}