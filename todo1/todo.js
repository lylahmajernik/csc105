


let addToDoButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('additem')
let tasks = document.querySelector('li')



function addToList(){
	var taskList = document.createElement('li');
	taskList.innerText = inputField.value;
	taskList.addEventListener('click', function(){
		taskList.style.textDecoration = "line-through";
	});
	taskList.addEventListener('dblclick', function(){
	
	//this part does not work
	toDoContainer.removeChild(this);
	});
	toDoContainer.appendChild(taskList);
	inputField.value = "";
	
}






addToDoButton.addEventListener('click', addToList)











































// Function to handle the task addition when the button is clicked
// // function clicked() {
    // Get the value from the input field
    // // var task = document.getElementById("additem").value;
    
    // If the input field is empty, do nothing
    // // if (!task.trim()) {
        // // return;
    // // }

    // Create a new <li> element for the task
    // // let addToList = document.createElement("li");

    // Set the text content of the <li> to the task value
    // // addToList.textContent = task;

    // Append the <li> to the task list (ul)
    // // document.getElementById("taskList").appendChild(addToList);

    // Clear the input field after adding the task
    // // document.getElementById("additem").value = "";

    // Log the task to the console (optional)
    // // console.log(task);
// // }

// Add event listener to the Add button
// // document.querySelector("#addButton").addEventListener("click", clicked);






























// //Originally had var task line outside of function, chat gpt told me to move it inside function...//
// function clicked(task) {
	// const ul = document.querySelector('ul');
	// const li = document.querySelector('li');
	// var task = document.getElementById("additem").value;
	// let addToList = document.createElement("li");
	// //originally had addToList.appendChild('task');
	// ul.appendChild(li);
	// addToList.textContent = task;
	// console.log(task);
// }

// document.querySelector("#addButton").addEventListener("click", clicked);


// // oirignally had infut wihtin <form></form>.... finally caught once removed that from html. 