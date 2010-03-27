var win = Titanium.UI.currentWindow;

var webview = Titanium.UI.createWebView({
	scalePageToFit : true,
	top : 10,
	left : 10,
	right : 10,
	width : 300,
	html : '<html><head><style type="text/css">body { font-family: helvetica, arial; } img { max-width: 270px; } pre { white-space: pre-wrap; }</style><body><h1>' + Titanium.App.Properties.getString('title') + '</h1>' + Titanium.App.Properties.getString('description')  + '</body</html>'
});

win.add(webview);
