// This script will contain all of the important JavaScript workings that make this program run. 
// Define various arrays that will allow program and user to add and access certain details.

var webDisplay = "index.html"


var proteinList = new Array("Shrimp","Tofu","Tempeh","Seitan","Mahi Mahi","Chickpeas","Impossible Meat","Veggie Burger", "Variety Fish");
var veggieList = new Array("Squash","Broccoli","Spinach","Asparagus","Green Beans","Carrots","Cauliflower","Avacado","Corn","Cabbage","Sweet Potato","Snap Peas");
var carbList = new Array("Pasta","Rice","Potatoes","Mac and Cheese","Bread","Tacos");
var dishList = new Array("Sphagetti", "Tortilla", "Paella", "Lasagna","Soup");
var placeList = new Array("K&L", "Ichiban", "Lisa's Fifth Street Diner", "Que Pasa Tacos", "Panda Express", "Blaze Pizza", "Subway");
// Need to get a list of all these things.
console.log(document.cookie);


// Call this function anytime cookies are edited to immediately put them back in order.
function parseCookies(){
	cookieList = document.cookie.split("; ");
	cookieList.sort();
	console.log(cookieList);
	
	for (let i = 0; i < cookieList.length; i++){
		cookieList[i] = cookieList[i].split("=")[1];
	}
	
	return cookieList;
}

parseCookies();

if (!document.cookie) {
	var proteinList = new Array("Shrimp","Tofu","Tempeh","Seitan","Mahi Mahi","Chickpeas","Impossible Meat","Veggie Burger", "Variety Fish");
	var veggieList = new Array("Squash","Broccoli","Spinach","Asparagus","Green Beans","Carrots","Cauliflower","Avacado","Corn","Cabbage","Sweet Potato","Snap Peas");
	var carbList = new Array("Pasta","Rice","Potatoes","Mac and Cheese","Bread","Tacos");
	var dishList = new Array("Sphagetti", "Tortilla", "Paella", "Lasagna","Soup");
	var placeList = new Array("K&L", "Ichiban", "Lisa's Fifth Street Diner", "Que Pasa Tacos", "Panda Express", "Blaze Pizza", "Subway");
	console.log("Defined cookies");
	document.cookie = "proteinList="+ proteinList.toString()+ ";Max-Age=2592000000;path=/;";
	document.cookie = "veggieList="+ veggieList.toString()+ ";Max-Age=2592000000;path=/";
	document.cookie = "carbList="+ carbList.toString()+ ";Max-Age=2592000000;path=/";
	document.cookie = "dishList="+ dishList.toString()+ ";Max-Age=2592000000;path=/";
	document.cookie = "placeList="+ placeList.toString()+ ";Max-Age=2592000000;path=/";
	
} else {
	var proteinList = cookieList[3].split(",");
	var veggieList = cookieList[6].split(",");
	var carbList = cookieList[0].split(",");
	var dishList = cookieList[1].split(",");
	var placeList = cookieList[2].split(",");
	
	console.log(proteinList + ";" + veggieList + ";" + carbList + ";" + dishList + ";" + placeList);
}

var protein = "";
var veggie = "";
var carb = "";
var dish = "";
var place = "";

var proteinGen = 0;
var veggieGen = 0;
var carbGen = 0;
var dishGen = 0;
var placeGen = 0;

const proteinPlan = []; 
const veggiePlan = [];
const carbPlan = [];

var i;
var day;

function generateMeal() {
	i = 0;
	jjj = 0;
	proteinPlan.length = 0;
	veggiePlan.length = 0;
	carbPlan.length = 0;
	
	while (i < 7) {
		day = String(i+1);
		jjj = 0;
		proteinGen = Math.floor(Math.random() * proteinList.length);
		veggieGen = Math.floor(Math.random() * veggieList.length);
		carbGen = Math.floor(Math.random() * carbList.length);
		
		if(cookieList[4] == "true"){
			if(i>0){
				while (jjj == 0){
					proteinGen = Math.floor(Math.random() * proteinList.length);
					if(proteinPlan.includes(proteinList[proteinGen])){
						jjj=0;
					} else { jjj = 1;
					}
				}
				while (jjj == 1){
					veggieGen = Math.floor(Math.random() * veggieList.length);
					if(veggiePlan.includes(veggieList[veggieGen])){
						jjj=1;
					} else {jjj = 3;}
				}
					while (jjj == 2){
					carbGen = Math.floor(Math.random() * carbList.length);
					if(carbPlan.includes(carbList[carbGen])){
						jjj=2;
					} else {jjj = 3;}
				}
			}
		}
		
		if(cookieList[5] == "true" && cookieList[4] == "false"){
			console.log("checking for repeats");
			if(i>0){
				while (jjj == 0){
					proteinGen = Math.floor(Math.random() * proteinList.length);
					if(proteinList[proteinGen] == proteinPlan[i-1]){
						jjj=0;
					} else { jjj = 1;
					console.log(proteinList[proteinGen]);
					}
				}
				while (jjj == 1){
					veggieGen = Math.floor(Math.random() * veggieList.length);
					if(veggieList[veggieGen] == veggiePlan[i-1]){
						jjj=1;
					} else {jjj = 3;}
				}
					while (jjj == 2){
					carbGen = Math.floor(Math.random() * carbList.length);
					if(carbList[carbGen] == carbPlan[i-1]){
						jjj=2;
					} else {jjj = 3;}
				}
			}
		}
		
		proteinPlan.push(proteinList[proteinGen]);
		veggiePlan.push(veggieList[veggieGen]);
		carbPlan.push(carbList[carbGen]);
		
		document.getElementById('proteinCell'+ day).innerHTML = proteinPlan[i];
		document.getElementById('veggieCell'+ day).innerHTML = veggiePlan[i];
		document.getElementById('carbCell'+ day).innerHTML = carbPlan[i];
	
		i += 1;
	}
	// document.write("Your meal today will be: " + protein + " with " + carb + " and " + veggie + ".");
	
}

function generateDish() {
	dishGen = Math.floor(Math.random() * dishList.length);
	
	dish = dishList[dishGen];
	
	document.getElementById('dishCell').innerHTML = dish;
	
}

function generatePlace() {
	placeGen = Math.floor(Math.random() * placeList.length);
	
	place = placeList[placeGen];
	
	document.getElementById('placeCell').innerHTML = place;
	
}

function listAdd(type){
	if (type === 1){
	
	}	else if (type === 2){
		
	}	else if (type === 3){
		
	}	else{
		console.log("List does not exist!");
	}
	
}


function outputLog() {
	document.write("plannerApplet.js is running properly");
	
	// This function just exists to check on things.
}

function showPreferences(){ // This function places the user's existing preferences into the settings menu.
	console.log("Preferences loaded");
	document.getElementById('proteinPref').value = proteinList.toString();
	document.getElementById('veggiePref').value = veggieList.toString();
	document.getElementById('carbPref').value = carbList.toString();
	document.getElementById('dishPref').value = dishList.toString();
	document.getElementById('restuarantPref').value = placeList.toString();
	
	console.log(document.cookie);
}

function savePreferences(){
	proteinList = document.getElementById('proteinPref').value.split(",");
	veggieList = document.getElementById('veggiePref').value.split(",");
	carbList = document.getElementById('carbPref').value.split(",");
	dishList = document.getElementById('dishPref').value.split(",");
	placeList = document.getElementById('restuarantPref').value.split(",");
	
	// save to cookies.
	
	document.cookie = "proteinList="+ proteinList.toString()+ ";Max-Age=220924800;path=/;SameSite=strict;";
	document.cookie = "veggieList="+ veggieList.toString()+ ";Max-Age=220924800;path=/;SameSite=strict;";
	document.cookie = "carbList="+ carbList.toString()+ ";Max-Age=220924800;path=/;SameSite=strict;";
	document.cookie = "dishList="+ dishList.toString()+ ";Max-Age=220924800;path=/;SameSite=strict;";
	document.cookie = "placeList="+ placeList.toString()+ ";Max-Age=220924800;path=/;SameSite=strict;";
	alert("Preferences saved successfully!");
	
	parseCookies();
}