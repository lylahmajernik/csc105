const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const messageError = document.getElementById("messageError")



function validateName(name) {
	if (name == "") {
		nameError.innerText = "Your name cannot be blank.";
		return false;
	} else if (!name.includes(" ")) {
		nameError.innerText = "Please enter a valid First and Last name";
		return false;
	} else {
		nameError.innerText = "";
		return true;
}}

function validateEmail(email) {
	if (email == "") {
		emailError.innerText = "Please enter your email";
		return false;
	} else {
		emailError.innerText = "";
		return true;
}}

function validateMessage(message) {
		if (message == "") {
		messageError.innerText = "Please include message.";
		return false;
	} else if (message.length > 301) {
		messageError.innerText = "Max characters for message exceed limit. Please enter under 300 characters.";
		
		return false;
	} else {
		messageError.innerText = "";
		return true
}}


function submitForm(e) {
	console.log("working")
	
	let verified = true;
	
	let name = nameField.value;
	let email = emailField.value;
	let message = messageField.value;
	
	
	if (!validateName(name)) {
		verified = false;
	}
	if (!validateEmail(email)) {
		verified = false;
	}
	if (!validateMessage(message)) {
		verified = false;
	}
	
		
	if (!verified) {
		e.preventDefault();
		
}}
	
document.getElementById("submitMe").addEventListener("click", submitForm);