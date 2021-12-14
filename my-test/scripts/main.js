document.querySelector('a').onclick = function() {
	alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/fire-fox.png') {
		myImage.setAttribute ('src','images/firefox2.png');
	} else {
		myImage.setAttribute ('src','images/fire-fox.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
	function setUserName() {
		var myName = prompt('Please enter your name.');
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Privet, ' + myName;
}
	if(!localStorage.getItem('name')) {
	setUserName();
	} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Privet, ' + storedName;
}
	myButton.onclick = function() {
	setUserName();
}