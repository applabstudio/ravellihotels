import 'lazysizes';
import siteHeader from './modules/site-header';
import allclick from './modules/allclick';
import modal from './modules/modal';
import setClassUiKit from './modules/setClassUiKit';
import hamburgher from './modules/hamburgher';
import {MDCTextField} from '@material/textfield';

siteHeader.init();
allclick.init();
modal.init();
setClassUiKit.init();
hamburgher.init();

const inps = document.querySelectorAll('.mdc-text-field');
inps.forEach(element => {
  new MDCTextField(element);
});