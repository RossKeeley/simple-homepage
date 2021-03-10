function searchFunction () {
  var search = document.getElementById('search');
  var searchBar = document.getElementById('search-bar');
  if (searchBar.className === "search-bar") {
    searchBar.classList.remove("search-bar");
  } else {
    searchBar.classList.add("search-bar");
  }
}

function toggleFunction () {
	var toggle = document.getElementsByClassName('toggle');
	var menu = document.getElementById('menu-function');
	if (menu.className === 'menu') {
		menu.className += ' menu-mobile';
	} else {
		menu.className = 'menu';
	}
}

function submitEmail () {
  var input = document.getElementById('email').value;
  if (validateEmail(input)) {
    window.alert("Thank you for subscribing!");
    document.getElementById('email').value = "";
  } else {
    window.alert("Not a valid email. Please try again");
    document.getElementById('email').value = "";
  }
}

function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
