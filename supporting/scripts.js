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
	
	switch(colorNum){	// chooses which color to set colored elements to
		case 0:
			document.getElementById('logospane').className = "logospane-blu";	// sets panel background to match images
			document.getElementById('uwab-logo').src = "logos/UW-AB_blu.png";	// rewrites colored-BG image to match
			break;
		case 1:
			document.getElementById('logospane').className = "logospane-grn";
			document.getElementById('uwab-logo').src = "logos/UW-AB_grn.png";
			break;
		case 2:
			document.getElementById('logospane').className = "logospane-yel";
			document.getElementById('uwab-logo').src = "logos/UW-AB_yel.png";
			break;
		default:
			document.getElementById('logospane').className = "logospane-yel";
			document.getElementById('uwab-logo').src = "logos/UW-AB_yel.png";
			break;
	}
};

function selfnav() {
	var pageurl = window.location.pathname;	// gets current page URL
	var pagefile = pageurl.split('/').pop();	// takes the string consisting of everything after the final / character from current URL
	var selfname = pagefile.split('.').shift();	// takes everything in the page's filename that precedes the extension (typically .shtml)
	
	if(selfname === '' || selfname === 'index'){	// checks for if the current page is the home page
		selfname = "home";
	}
	
	document.getElementById(selfname).className = "navcurrent";	// sets class of current page's link to be highlighted
	document.getElementById(selfname).innerHTML = selfname;	// removes a tag from current page entry in nav list
};