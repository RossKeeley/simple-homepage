function toggleFunction () {
	var toggle = document.getElementsByClassName('toggle');
	var menu = document.getElementById('menu-function');
	if (menu.className === 'menu') {
		menu.className += ' menu-mobile';
	} else {
		menu.className = 'menu';
	}
}
