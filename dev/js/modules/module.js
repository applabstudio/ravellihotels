const module = function() {
	const table = document.querySelectorAll('table');
	table.forEach((t, i=0) => t.className = `uk-table uk-table-divider`);
}
  
export default { init:module };