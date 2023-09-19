// This script will contain all of the important JavaScript workings that make this program run. 
// Define various arrays that will allow program and user to add and access certain details.

var webDisplay = "C:\Users\Travis\Desktop\Projects\MealPlanningApp\MealPlanWeeklong\webDisplay.html"

const proteinList = ["Shrimp","Tofu","Tempeh","Seitan","Mahi Mahi","Chickpeas","Impossible Meat","Veggie Burger", "Variety Fish"];
const veggieList = ["Squash","Broccoli","Spinach","Asparagus","Green Beans","Carrots","Cauliflower","Avacado","Corn","Cabbage","Sweet Potato","Snap Peas"];
const carbList = ["Pasta","Rice","Potatoes","Mac and Cheese","Bread","Tacos"];
const dishList = ["Sphagetti", "Tortilla", "Paella", "Lasagna","Soup"];
const placeList = ["K&L", "Ichiban", "Lisa's Fifth Street Diner", "Que Pasa Tacos", "Panda Express", "Blaze Pizza", "Subway"]
// Need to get a list of all these things.

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
	proteinPlan.length = 0;
	veggiePlan.length = 0;
	carbPlan.length = 0;
	
	while (i < 7) {
		day = String(i+1);
		proteinGen = Math.floor(Math.random() * proteinList.length);
		veggieGen = Math.floor(Math.random() * veggieList.length);
		carbGen = Math.floor(Math.random() * carbList.length);
		
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