
let findButton = document.getElementById('findButton');
let fruitList = document.getElementById('fruitList');
let inputField = document.getElementById('fruitInput');
let resetButton = document.getElementById('reset');
let listContainer = document.getElementById('listContainer');
let error = 0

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Mango",
  "Strawberry",
  "Kiwi",
  "Watermelon",
  "Papaya",
  "Blueberry",
  "Peach",
  "Plum",
  "Apricot",
  "Dragonfruit",
  "Cantaloupe",
  "Raspberry",
  "Blackberry",
  "Fig"
];

function searchList() {
	
	let magicFruit = inputField.value.toLowerCase();
	if (magicFruit === "") return;
	let listItems = fruitList.getElementsByTagName('li');
	error = 0
	
	let existingError = document.getElementById("errorMessage");
	if (existingError) existingError.remove();
	//Also found this ^ from stack overflow... weird but does mkae sense. 
	let existingCongrats = document.getElementById("congratsMessage");
	if (existingCongrats) existingCongrats.remove();
	
	for (let i = 0; i < listItems.length; i++) {
		let fruitName = listItems[i].textContent.toLowerCase();
		
		if (fruitName.includes(magicFruit)){
		
			match()
			listItems[i].classList.add("found");
			listItems[i].classList.remove("hidden");
			
		}
			
		
		else {
			listItems[i].classList.add("hidden");
			listItems[i].classList.remove("found");
			
			error++;
}}

		if (error === listItems.length){
			noMatch(magicFruit)}
			
			
		inputField.value = "";
			
}

function resetList() {
	let listItems = fruitList.getElementsByTagName('li');
	
	for (let i = 0; i < listItems.length; i++){
	listItems[i].classList.remove("found");
	listItems[i].classList.remove("hidden");
	
		}
		error = 0;
		inputField.value = "";
		
		  let existingError = document.getElementById("errorMessage");
			if (existingError) existingError.remove(); // Chat GPT helped me here, but I understand what it means. 
		
}

function noMatch(magicFruit) {
	let paragraph = document.createElement("p");
	paragraph.innerText = "Sorry, no match for " + magicFruit;
	paragraph.id = "errorMessage";
	listContainer.appendChild(paragraph);	
	
}

function match() {
	let paragraph = document.createElement("p");
	paragraph.innerText = "Congrats, this fruit is a match!";
	paragraph.id = "congratsMessage";
	listContainer.appendChild(paragraph);	
	
}



findButton.addEventListener("click", searchList);
resetButton.addEventListener("click", resetList);

inputField.addEventListener('keypress', function() {
	if (event.key === 'Enter')
		searchList();
});


