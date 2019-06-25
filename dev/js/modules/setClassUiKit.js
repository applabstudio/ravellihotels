const setClassUiKit = function() {
	//Dynamic set class and attributes UIKit

	// Uk Table
	const table = document.querySelectorAll('table');
	table.forEach((t, i=0) => t.className = `uk-table uk-table-divider uk-table-striped uk-table-hover uk-table-responsive`);
	
	// Uk Animation kenburns background image animation
	if(document.querySelectorAll("#bg-section").length > 0) {
		document.getElementById('bg-section').getElementsByTagName('img')[0].className += "uk-animation-reverse uk-transform-origin-top-right";
		document.getElementById('bg-section').getElementsByTagName('img')[0].setAttribute("uk-scrollspy", "cls: uk-animation-kenburns; repeat: true"); 
	}
}
  
export default { init:setClassUiKit };