//
// Displays a list of the recent articles (titles) for a Tuts site.
// STILL SLOPPY. CLEAN UP.
//

var rows = [];
	if ( Titanium.App.Properties.getString('site') === 'All' ) {
		var query = "Select title, encoded, guid.content from rss where url='http://pipes.yahoo.com/pipes/pipe.run?_id=de585e903ac6feb6388eccbf43d3e208&_render=rss'";
	}
	else {
		var query = "select title, encoded, origLink from rss where url='http://feeds.feedburner.com/" + Titanium.App.Properties.getString('site') + "tuts'";
	}

Titanium.Yahoo.yql(query, function(e) {		
	data = e.data;

	for ( var i = 0; i < data.item.length; i++ ) {
		newRow = { 
			title : data.item[i].title, 
			test : 'article.js', 
			description : data.item[i].encoded, 
			url : data.item[i].guid
		};
		
		if ( Titanium.App.Properties.getString('site') === 'All' ) {
			var siteName = data.item[i].guid.split('http://');
			siteName = siteName[1].split('.');
			newRow.leftImage = '../images/tiny-' + siteName[0] + '.jpg';
		}
		
		rows.push(newRow);
	}
	
	// Populate a tableview with the titles
	var tableView = Titanium.UI.createTableView({
		data : rows
	});

	Titanium.UI.currentWindow.add(tableView);
	
	
	tableView.addEventListener('click', function(e) {
		Titanium.API.info(e);
		if ( e.rowData.test ) {
			var newWindow = Titanium.UI.createWindow({
				url : rows[e.index].test, 
				title : e.rowData.title,
				transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
			});
			
			Titanium.App.Properties.setString('description', rows[e.index].description);
			Titanium.App.Properties.setString('url', rows[e.index].url);
			Titanium.App.Properties.setString('title', rows[e.index].title);	
		}

		Titanium.UI.currentTab.open( newWindow, { animated : true } );
		
	});
	
});

