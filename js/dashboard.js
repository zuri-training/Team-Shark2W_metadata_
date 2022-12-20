const menu = document.getElementById('menu');
menu.onclick = function () {
	const getSidebarElem = document.querySelector('sidebar-modal');
	getSidebarElem.setAttribute('open', '');
};
