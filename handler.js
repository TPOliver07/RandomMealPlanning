// This script is for handling preferences and swapping pages.

doc = "index.html"

var repeatB2B = true;
var repeatAll = true;
document.cookie = "repeatB2B = "+ repeatB2B+ ";Max-Age=220924800;path=/;SameSite=strict;";
document.cookie = "repeatAll="+ repeatAll+ ";Max-Age=220924800;path=/;SameSite=strict;";

function load(type, home) {
	if (type==="single"){
		document.getElementById("singleDIV").style.display = "block";
		document.getElementById("listDIV").style.display = "none";
		document.getElementById("placeDIV").style.display = "none";
		document.getElementById("prefDIV").style.display = "none";
		home = "n"
	}
	if (type==="shoppingList"){
		document.getElementById("singleDIV").style.display = "none";
		document.getElementById("listDIV").style.display = "block";
		document.getElementById("placeDIV").style.display = "none";
		document.getElementById("prefDIV").style.display = "none";
		home = "n"
	}
	if (type==="place"){
		document.getElementById("singleDIV").style.display = "none";
		document.getElementById("listDIV").style.display = "none";
		document.getElementById("placeDIV").style.display = "block";
		document.getElementById("prefDIV").style.display = "none";
		home = "n"
	}
	if (type==="pref"){
		document.getElementById("prefDIV").style.display = "block";
		document.getElementById("singleDIV").style.display = "none";
		document.getElementById("listDIV").style.display = "none";
		document.getElementById("placeDIV").style.display = "none";
		home = "n"
	}
}

function changePref(pref, newVal){
	parseCookies();
	
	if (pref == "repeatB2B"){
		if (newVal == true){repeatB2B = true;}
		else {repeatB2B = false;}
		console.log("repeatB2B="+ repeatB2B)
	} else if(pref == "repeatAll"){
		if (newVal == true){
			if(cookieList[0].split(",").length < 6 || cookieList[3].split(",").length < 6 || cookieList[6].split(",").length < 6){
				alert("Need at least 7 items!");
				repeatAll = false;
				document.getElementById("repeatAllCheck").checked = false;
			} else {
				repeatAll = true;
			}
		} else {repeatAll = false;}
		console.log("repeatAll = " + repeatAll);
		
	} else {console.log("No variable under that name!");}
	
	document.cookie = "repeatB2B="+ repeatB2B+ ";Max-Age=220924800;path=/;SameSite=strict;";
	document.cookie = "repeatAll="+ repeatAll+ ";Max-Age=220924800;path=/;SameSite=strict;";
}