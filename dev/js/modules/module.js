const module = function() {
	const table = document.querySelectorAll('table');
	table.forEach((t, i=0) => t.className = `uk-table uk-table-divider uk-table-striped uk-table-hover uk-table-responsive`);
}
  
export default { init:module };