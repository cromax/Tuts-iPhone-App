// Displays a list of available categories for the selected site.
var win = Ti.UI.currentWindow,
	query;

// Add loading icon. Note - needs to be removed after data is loaded, with loadingIcon.hide().
Ti.include('loading.js');

 // Make YQL query to get feed. websiteName is equal to the tuts site prefix, like Net, Vector, Psd, etc. So, like feeds.feedburner.com/nettuts
query = "Select title, guid, category from rss where url='http://feeds.feedburner.com/" + Ti.App.Properties.getString('websiteName') + "tuts' | unique(field='guid') | unique(field='category')";

Ti.Yahoo.yql(query, function(e) {		
	var data = e.data,
		tableView = Ti.UI.createTableView();

	// Filter through the items in the feed and create new tableviewrows.
	for ( var i = 0; i < data.item.length; i++ ) {
		var newRow = Ti.UI.createTableViewRow({
			title : data.item[i].category,
			path : 'getByCategory.js',
			url : data.item[i].guid,
		    hasChild : true
		});
		tableView.appendRow(newRow);
	}
		
	// Populate a tableview with the titles
	Ti.UI.currentWindow.add(tableView);	
	
	// Get rid of loading icon now that the rows have been populated.
	loadingIcon.hide();
	
	// When a title is clicked, open a new window and pass the details of the selected posting.
	tableView.addEventListener('click', function(e) {

		if ( e.rowData.path ) {
			var newWin = Ti.UI.createWindow({
				url : e.rowData.path, 
				title : e.rowData.title,
				barColor : Ti.UI.currentWindow.barColor
			});

			newWin.category = e.rowData.title;
		}

		Ti.UI.currentTab.open( newWin, { animated : true } );
		
	});
	
});