"use strict";

/*	Welcome to my lair.	*/


/*	Transforms URL to page name (filename without extension, or Home).
Inputs: pageURL (string) expects output of window.location.pathname
Returns:	page name (string) filename without extension	*/
function getPage(pageURL) {
	var pageFile = pageURL.split('/').pop();	// takes the string consisting of everything after the final / character from current URL
	var selfName = pageFile.split('.').shift();	// takes everything in the page's filename that precedes the extension (typically .shtml)
	
	if( selfName === null || (selfName === '' || selfName === 'index') ){	// checks for if the current page is the home page
		if( ~pageURL.indexOf('pages') )	{ selfName = "sitemap"; }	// site map page and home page are both 'index.shtml' pages, but site map is in pages/ folder
		else{ selfName = "home"; }
	}
	
	return selfName;
};


/*	Loads an external file for reading in XML formatted data.
Inputs:		fileURL (string) URL, can be relative if base href is specified in HTML file's header
Returns:	fetched XML file (XML document object) see newEval() for example usage 	*/
function loadXMLDoc(fileURL) {
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', fileURL, false);
	xhttp.send();
	
	var xmltxt = xhttp.responseXML;	

	return xmltxt;
};


/*	Generates raised pane full of logos for site map and affiliated organizations.
Inputs:	none
Returns:	none	*/
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


/*	Randomly selects a student evaluation to display and inserts it into an existing table.
Inputs:	none
Returns:	none	*/
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


/*	Rewrites navigation link for the current page to be highlighted, non-clickable text.
Inputs:	none
Returns:	none	*/
function selfNav() {
	var pageURL = window.location.pathname;	// gets current page URL
	var selfName = getPage(pageURL);	// converts URL to filename, sans extension
	
	document.getElementById(selfName).className = "navcurrent";	// sets class of current page's link to be highlighted
	document.getElementById(selfName).innerHTML = selfName;	// removes a tag from current page entry in nav list
};


/*	Sets banner image to individual selection made for each page
Inputs:	none
Returns:	none	*/
function setHeader() {
	var selfName = getPage(window.location.pathname);	// gets page name
	var pageTitle = "Marshall Styczinski";	// default text for page titles	
	var banner = "sunset_croagh_patrick.jpg";	// default banner image
	
	switch(selfName) {
		case "home":
			pageTitle = "Marshall Styczinski: Main Page";
			banner = "sunset_croagh_patrick.jpg";	// sets banner to page-specific one
			break;
		case "teaching":
			pageTitle = "Teaching";
			banner = "across_lough_arrow.jpg";
			break;
		case "research":
			pageTitle = "Research";
			banner = "tower_at_moher.jpg";
			break;
		case "experience":
			pageTitle = "Experience and Qualifications";
			banner = "over_muckross_head.jpg";			
			break;
		case "resources":
			pageTitle = "Helpful Resources";
			banner = "clew_bay_islands.jpg";
			break;
		case "personal":
			pageTitle = "Personal Information";
			banner = "croagh_patrick_together.jpg";
			break;
		case "blog":
			pageTitle = "Blog";
			banner = "croagh_patrick_peek.jpg";
			break;
		case "sitemap":
			pageTitle = "Site Map";
			banner = "clew_bay_open.jpg";
			break;
		case "construction":
			pageTitle = "This page is under construction.";
			banner = "kerry.jpg";
	}
	
	banner = "url('banners/" + banner + "')";	// formats banner string to be of the form 'url(banners/the_image.jpg)'
	document.getElementById('headbanner').style.backgroundImage = banner;
	document.getElementById('pagetitle').innerHTML = pageTitle;
};


/*	Toggles animation for screen capture of electromagnetic waves simulation.
Inputs:	running (boolean) whether or not the animation is currently running. True if running.
Returns:	running state (boolean) new animation condition. True if running.	*/
function toggleAnim(running) {
	if(running){document.getElementById('emw').src = "images/EM_waves_still.gif"}
	else{document.getElementById('emw').src = "images/EM_waves.gif"}
	running = !running;
	return running;
};