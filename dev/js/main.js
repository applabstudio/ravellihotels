import 'lazysizes';
import siteHeader from './modules/site-header';
import allclick from './modules/allclick';
import UIKit from './modules/UIKit';
import hamburgher from './modules/hamburgher';
import {MDCTextField} from '@material/textfield';

siteHeader.init();
allclick.init();
hamburgher.init();
UIKit.init();

// Instance MDCTextField
const textfieldMaterialDesign = document.querySelectorAll('.mdc-text-field');
textfieldMaterialDesign.forEach(element => {
  new MDCTextField(element);
});