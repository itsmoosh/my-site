"use strict";

function newEval() {
	var ind = Math.floor(Math.random()*2);	// ind is random integer from 0 to 47 inclusive

	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "supporting/studentEvals.xml", true);
	var xmlDoc;
	
	xhttp.onload = function () {
		if(xhttp.readyState === 4) {
			if(xhttp.status == 200){
				xmlDoc = xhttp.responseXML;
				console.log(xmlDoc);
			}
		}
	};	
	xhttp.send();
	xmlDoc = xhttp.responseXML;
	
	console.log(xmlDoc);
	console.log(xhttp.readyState);

	var currQ = xmlDoc.getElementsByTagName("question")[ind].childNodes[0].nodeValue;
	var currR = xmlDoc.getElementsByTagName("response")[ind].childNodes[0].nodeValue;	
	
		// rewrites #evalQ HTML element with data from the first (and only) item in the ind'th question in the XML file
	document.getElementById("evalQ").innerHTML = currQ;//.getElementsByTagName("question")[ind].childNodes[0].nodeValue;
	document.getElementById("evalR").innerHTML = currR;//.getElementsByTagName("response")[ind].childNodes[0].nodeValue;
	
};