var win = Ti.UI.currentWindow;

// Can't find a way to gain access to variables from within an .html webview. Doing it this way for now - but is sloppy. I'm sure there's a smarter/cleaner way. 
var webview = Ti.UI.createWebView({
	scalePageToFit : true,
	top : 10,
	left : 10,
	right : 10,
	html : '<html><head><style type="text/css">* { max-width: 270px; } body { font-family: helvetica neue, helvetica, arial; width: 270px; overflow: hidden; color : #3f3f3f; } h1,h2,h3,h4,h5 { color: black; } img { max-width: 270px; } pre { white-space: pre-wrap; }</style><body><h1>' + win.title + '</h1>' + win.desc  + '</body</html>'
});

// add button which links to the original article.
var button = Ti.UI.createButton({
	title:'View Full Article'
});
win.setToolbar([button]);

button.addEventListener('click', function() {
	win.animate( { view : webview, transition : Ti.UI.iPhone.AnimationStyle.CURL_DOWN });		
	win.setToolbar( null,{animated:true} );	
	var newWin = Ti.UI.createWebView({
		url : win.theUrl
	});	
	win.add(newWin);

});

// Add the webview (the original webpage article), and animate the page into view.
win.add(webview);
win.animate( { view : webview, transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT } );


