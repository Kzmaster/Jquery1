/*function thangs() {
	$("#stuff").append("<h1>Stuff nd Thangs</h1>");
};

$("#stuff").click(function() {
	thangs();
});
Can someone explain to me why the code above doesn't work? Please e-mail at kzanders@mcad.edu */



$(document).ready(function() {
	document.getElementById("text").innerHTML = "This document contains stuff nd thangs. Ashby there's a question in the code.";
});