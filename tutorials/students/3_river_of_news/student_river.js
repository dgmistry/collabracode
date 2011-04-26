"use strict"; //How is this just put here in quotes? What is this called? Same with "onsuccess"

var riverCallback = {
  "onsuccess" : function(obj) {
    // TODO
	var title1 = document.getElementById("title");
	title1.innerHTML = obj.rss.channel.title;
	
	var river = document.getElementById("river");
	var items = obj.rss.channel.item;
	
	
	for (var key in items) {
		var domTitle = document.createElement("p"); //create a DOM element
		itemTitle = items[key].title; // pulling the value from the JSON
		//domTitle.innerHTML='<a href="javascript:;">' + itemTitle + '</a>'; // assigning the value to the DOM element
		domTitle.className ="article-title"; //setting the CSS class for 
		domTitle.innerHTML='<a href="domArticle.className ="article-title";">' + itemTitle + '</a>'; // assigning the value to the DOM element
		
		river.appendChild(domTitle);
		var domArticle = document.createElement("div"); 
		itemBody = items[key].description;
		itemBody=itemBody.replace(/&quot;/g, '"');
		domArticle.innerHTML = itemBody;
		domArticle.className ="hidden";
		domTitle.appendChild(domArticle);
		//console.log(items[key].title);
	}
	
	
    log("SUCCESS: Loaded rss.json file");
  },
  "onerror" : function(req) {
    log("ERROR: Unable to download rss.json file" + req);
  }
};