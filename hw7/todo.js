


let addToDoButton = document.getElementById('addButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('additem')
let tasks = document.querySelector('li')



function addToList(){
	var taskList = document.createElement('li');

	taskList.innerText = inputField.value;
	
	
	
	 var deleteButton = document.createElement('button');
	deleteButton.innerText = 'Delete';
	deleteButton.addEventListener('click', function() {
    toDoContainer.removeChild(taskList);
	});
	
	taskList.appendChild(deleteButton);
	
	
	taskList.addEventListener('click', function(){
		taskList.classList.toggle("completed");
	});
	
	
	
	
	
	
	toDoContainer.appendChild(taskList);
	inputField.value = "";

	
}






addToDoButton.addEventListener('click', addToList)

inputField.addEventListener('keypress', function(){
	if (event.key === 'Enter') {
		addToList()
	}
});





























