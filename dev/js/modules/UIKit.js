const UIKit = function() {
	//Dynamic set class and attributes UIKit

	// Uk Table
	const table = document.querySelectorAll('table');
	table.forEach((t, i=0) => t.className = `uk-table uk-table-divider uk-table-striped uk-table-hover uk-table-responsive`);
	
	// Do you have problems with inputs? Add the classes from this if block
	// if(document.querySelectorAll("#contact").length > 0) {
	// 	const inputs = document.querySelectorAll('input');
	// 	inputs.forEach((e, i=0) => e.className = `mdc-text-field__input`);
	// }

	// Uk Animation kenburns background image animation
	if(document.querySelectorAll("#bg-section").length > 0) {
		document.getElementById('bg-section').getElementsByTagName('img')[0].className += "uk-animation-reverse uk-transform-origin-top-right";
		document.getElementById('bg-section').getElementsByTagName('img')[0].setAttribute("uk-scrollspy", "cls: uk-animation-kenburns; repeat: true"); 
	}

	// Fix Bug Mobile Button Animation Slide Left/right 
	var mQuery = window.matchMedia( "(max-width: 570px)" );
	if (mQuery.matches) {
		// window width is at less than 570px
		if(document.querySelectorAll(".confirm-info").length > 0) {
			document.querySelector('.confirm-info').getElementsByTagName('div')[1].removeAttribute("uk-scrollspy");
			document.querySelector('.confirm-info').getElementsByTagName('div')[0].removeAttribute("uk-scrollspy");
			document.querySelector('.confirm-info').getElementsByTagName('div')[0].style.visibility = 'visible';
			document.querySelector('.confirm-info').getElementsByTagName('div')[1].style.visibility = 'visible';
			document.querySelector('.confirm-info').classList.toggle('uk-padding');
		}
	}
	  
}
  
export default { init:UIKit };