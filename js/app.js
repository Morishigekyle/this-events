//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName("navi");

for(var i=0; i<navElem.length; i++){
	navElem[i].addEventListener("click", showInner);
}

var innerElem = document.getElementsByClassName("inner");
for(var i=0; i<innerElem.length;i++){
	innerElem[i].style.display = "none";
}

function showInner(){
	var about = this.querySelectorAll(".inner")[0];
	if(about.style.display === "none"){
		about.style.display = "block";
	}else{
		about.style.display = "none";
	}
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var dElem = document.getElementsByClassName("name");

for(var i = 0; i < dElem.length; i++){
	dElem[i].addEventListener("click", showMenu);
}

var mElem = document.getElementsByClassName("menu");
for(var i=0; i<mElem.length;i++){
	mElem[i].style.display = "none";
}

function showMenu(){
	var menu = this.querySelectorAll(".menu")[0];
	if(menu.style.display === "none"){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}