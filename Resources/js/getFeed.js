//
// Displays a list of the recent articles (titles) for a Tuts site.
//

var items = [],
	query = "select * from rss where url='http://feeds.feedburner.com/" + Titanium.App.Properties.getString('site') + "tuts'";

Titanium.Yahoo.yql(query, function(e) {		
	data = e.data;

	for ( var i = 0; i < data.item.length; i++ ) {
		items.push({ 
			title : data.item[i].title, 
			test : 'article.js', 
			description : data.item[i].encoded, 
			url : data.item[i].origLink 
		});
	}
	
	// Populate a tableview with the titles
	var tableView = Titanium.UI.createTableView({
		data : items
	});

	Titanium.UI.currentWindow.add(tableView);
	
	
	tableView.addEventListener('click', function(e) {
		Titanium.API.info(e);
		if ( e.rowData.test ) {
			var newWindow = Titanium.UI.createWindow({
				url : items[e.index].test, 
				title : e.rowData.title,
				transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
			});
			
			Titanium.App.Properties.setString('description', items[e.index].description);
			Titanium.App.Properties.setString('url', items[e.index].url);
			Titanium.App.Properties.setString('title', items[e.index].title);	
		}

		Titanium.UI.currentTab.open( newWindow, { animated : true } );
		
	});
	
});

