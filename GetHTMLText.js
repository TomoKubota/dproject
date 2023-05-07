window.onload = function(e){
	console.log(document.documentElement.outerHTML);
	//return document.documentElement.outerHTML;
	copy(new XMLSerializer().serializeToString(document));
}
