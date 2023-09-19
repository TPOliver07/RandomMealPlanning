// This script is for handling preferences and swapping pages.

doc = "C:\Users\Travis\Desktop\Projects\MealPlanningApp\MealPlan_v0_1_0\library\html\home.html"

function load(type, home) {
	if (type==="single"){
		document.getElementById("singleDIV").style.display = "block";
		document.getElementById("listDIV").style.display = "none";
		document.getElementById("placeDIV").style.display = "none";
		home = "n"
	}
	if (type==="shoppingList"){
		document.getElementById("singleDIV").style.display = "none";
		document.getElementById("listDIV").style.display = "block";
		document.getElementById("placeDIV").style.display = "none";
		home = "n"
	}
	if (type==="place"){
		document.getElementById("singleDIV").style.display = "none";
		document.getElementById("listDIV").style.display = "none";
		document.getElementById("placeDIV").style.display = "block";
		home = "n"
	}
}