"use strict";

function newEval() {
	var xmlDoc = loadXMLDoc("supporting/studentEvals.xml");
	var numEvals = xmlDoc.getElementsByTagName('response').length;	
	var ind = Math.floor(Math.random()*numEvals);	// ind is random integer in the range [0, numEvals)	
	
	var currQ = xmlDoc.getElementsByTagName('question')[ind].childNodes[0].nodeValue;	// store a single question and response 
	var currR = xmlDoc.getElementsByTagName('response')[ind].childNodes[0].nodeValue;	

		// rewrites #evalQ HTML element with data from the first (and only) item in the ind'th question in the XML file
	document.getElementById('evalQ').innerHTML = currQ;
	document.getElementById('evalR').innerHTML = currR;
};

function loadXMLDoc(fileurl) {
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', fileurl, false);
	xhttp.send();
	
	var xmltxt = xhttp.responseXML;	

	return xmltxt;
};

function toggleAnim(running) {
	if(running){document.getElementById('emw').src = "images/EM_waves_still.gif"}
	else{document.getElementById('emw').src = "images/EM_waves.gif"}
	running = !running;
	return running;
};

function logosPane() {
	var colorNum = Math.floor(Math.random()*3);	// choose an integer index in the range [0, 3) (3 colors created)
	var paneHTML = '';
	
	switch(colorNum){	// chooses which color's SHTML file will be inserted
		case 0:
			paneHTML = '<!--#include virtual="/mjstyczi/supporting/logospane-blu.shtml" -->';	// rewrites icons for new color selection
			document.getElementById('logospane').className = "logospane-blu"	// sets panel background to match images
			break;
		case 1:
			paneHTML = '<!--#include virtual="/mjstyczi/supporting/logospane-grn.shtml" -->';
			document.getElementById('logospane').className = "logospane-grn"
			break;
		case 2:
			paneHTML = '<!--#include virtual="/mjstyczi/supporting/logospane-yel.shtml" -->';
			document.getElementById('logospane').className = "logospane-yel"
			break;
		default:
			paneHTML = '<!--#include virtual="/mjstyczi/supporting/logospane-yel.shtml" -->';
			document.getElementById('logospane').className = "logospane-yel"
			break;
	}
	
	document.getElementById('logospane').innerHTML = paneHTML;	// inserts selected SHTML file into the page
};