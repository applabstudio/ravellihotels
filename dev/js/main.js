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

//Dynamic set class and attributes UIKit
if(document.querySelectorAll("#bg-section").length > 0) {
  document.getElementById('bg-section').getElementsByTagName('img')[0].className += "uk-animation-reverse uk-transform-origin-top-right";
  document.getElementById('bg-section').getElementsByTagName('img')[0].setAttribute("uk-scrollspy", "cls: uk-animation-kenburns; repeat: true"); 
}