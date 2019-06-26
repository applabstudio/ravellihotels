import 'lazysizes';
import siteHeader from './modules/site-header';
import allclick from './modules/allclick';
import modal from './modules/modal';
import UIKit from './modules/UIKit';
import hamburgher from './modules/hamburgher';
import {MDCTextField} from '@material/textfield';

siteHeader.init();
allclick.init();
modal.init();
UIKit.init();
hamburgher.init();

// Instance MDCTextField
const textfieldMaterialDesign = document.querySelectorAll('.mdc-text-field');
textfieldMaterialDesign.forEach(element => {
  new MDCTextField(element);
});