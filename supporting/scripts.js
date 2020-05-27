"use strict";

/*	Welcome to my lair. I can't take full credit for all of the coding strategies here, but the comments are all my own efforts.	*/


/*	Adds onmouseenter function to document body, for responsive image map revert
Inputs:	none
Returns:	none	*/
function addSiteMapRevert() {
	document.body.onmouseover = function(){ siteMapRevert(); };
};


/*	Pulls the most recent post from my personal blog to display on the blog page. Expects blog post to be read in via iframe to the current page.
	No longer necessary, as my blog is defunct and not included on my website.
Inputs:	none
Returns: none	*/
function getBlog() {
	var blogRecent = document.getElementById('blogPost').contentWindow.document.getElementsByClassName('date-outer')[0];
	
	//document.getElementById('maincontent').innerHTML = blogRecent;
};


/*	Transforms URL to page name (filename without extension, or Home).
Inputs: pageURL (string) expects output of window.location.pathname
Returns:	page name (string) filename without extension	*/
function getPage(pageURL) {
	var pageFile = pageURL.split('/').pop();	// takes the string consisting of everything after the final / character from current URL
	var selfName = pageFile.split('.').shift();	// takes everything in the page's filename that precedes the extension (typically .shtml)
	
	if( selfName === null || (selfName === '' || selfName === 'index') ){	// checks for if the current page is a 'index.shtml' page
		if( ~pageURL.indexOf('pages') )	{ selfName = "sitemap"; }	// true if 'pages' is found in the pageURL string 
		else{ selfName = "home"; }	// site map page and home page are both 'index.shtml' pages, but site map is in pages/ folder
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
Returns:	colorNum, an index for the selected color	*/
function logosPane() {
	var colorNum = Math.floor(Math.random()*3);	// choose an integer index in the range [0, 3) (3 colors created)
	
	switch(colorNum){	// chooses which color to set colored elements to
		case 0:
			document.getElementById('logospane').className = "logospane-all logospane-blu";	// sets panel background to match images
			break;
		case 1:
			document.getElementById('logospane').className = "logospane-all logospane-grn";
			break;
		case 2:
			document.getElementById('logospane').className = "logospane-all logospane-yel";
			break;
		default:
			document.getElementById('logospane').className = "logospane-all logospane-yel";
			break;
	}
	return colorNum;
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


/*	Adds onmouseenter and onmouseleave actions to logospane logo. Animates the logo on mouseover.
Inputs:	colorNum, an index indicating the background color (gifs don't support transparency).
Returns:	none	*/
function paneLogoAnim(colorNum) {
	switch(colorNum){
		case 0:
			document.getElementById('my-logo').onmouseenter = function(){
				this.src = "logos/site_map_blu.gif";
			};
			document.getElementById('my-logo').onmouseleave = function(){
				this.src = "logos/Vector.png";
			};
			break;
		case 1:
			document.getElementById('my-logo').onmouseenter = function(){
				this.src = "logos/site_map_grn.gif";
			};
			document.getElementById('my-logo').onmouseleave = function(){
				this.src = "logos/Vector.png";
			};
			break;
		case 2:
			document.getElementById('my-logo').onmouseenter = function(){
				this.src = "logos/site_map_yel.gif";
			};
			document.getElementById('my-logo').onmouseleave = function(){
				this.src = "logos/Vector.png";
			};
			break;
		default:
			document.getElementById('my-logo').onmouseenter = function(){
				this.src = "logos/site_map_yel.gif";
			};
			document.getElementById('my-logo').onmouseleave = function(){
				this.src = "logos/Vector.png";
			};
			break;
	}
};


/*	Expands an iframe to fit the page, to remove the annoying scroll bar that plagues the default size.
@@@Important@@@: Execute only after window.onload has fired. Use another in-line function to call--parentheses after a function name trigger it immediately. (See pages/experience.shtml for an example.)
Inputs:	iframeID, the element ID of the iframe to be resized
Returns:	none	*/
function removeScroll(iframeID) {
	var iframeEl = document.getElementById(iframeID);
	var innerDoc = iframeEl.contentDocument;	// Grabs the HTML document pulled into the iframe
	var fullHeight = innerDoc.firstChild.scrollHeight + "px";	// Reads the height of the body element inside the iframe

	iframeEl.style.height = fullHeight;	// Set iframe viewing port to the size of interior contents
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


/*	Sets banner image to individual selection made for each page.
	Also sets mouseover behavior of personal logo.
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
			banner = "under_muckross_head.jpg";
			break;
		case "audio":
			pageTitle = "Audio Recordings";
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
	
	document.getElementById('site-map-logo').onmouseenter = function(){
		this.src = "logos/site_map_wht.gif";
	};
	document.getElementById('site-map-logo').onmouseleave = function(){
		this.src = "logos/Vector.png";
	};
};


/*	Sets highlighting mouseover behavior for the visual site map.
Inputs:	sector, a text string matching a pageName that specified which region to highlight
Returns:	none	*/
function siteMap(sector) {
	document.getElementById('site-map-planets').src = "supporting/graphics/site_map_" + sector + ".png"
};


/*	Reverts site map to base image.
Inputs:	none
Returns:	none	*/
function siteMapRevert() {
	document.getElementById('site-map-planets').src = "supporting/graphics/site_map.png"
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
