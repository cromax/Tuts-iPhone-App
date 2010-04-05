// Displays a list of available categories for the selected site.
var win = Titanium.UI.currentWindow,
	query;

// Add loading icons. Note - needs to be removed after data is loaded, with loadingIcon.hide().
Ti.include('loading.js');

 // Make YQL query to get feed.
query = "Select title, guid, category from rss where url='http://feeds.feedburner.com/" + Titanium.App.Properties.getString('websiteName') + "tuts' | unique(field='guid') | unique(field='category')";

Titanium.Yahoo.yql(query, function(e) {		
	var data = e.data,
		tableView = Titanium.UI.createTableView();

	for ( var i = 0; i < data.item.length; i++ ) {
		var newRow = Titanium.UI.createTableViewRow({
			title : data.item[i].category,
			test : 'getByCategory.js',
			url : data.item[i].guid,
		    hasChild : true
		});

		tableView.appendRow(newRow);
	}
		
	// Populate a tableview with the titles
	Titanium.UI.currentWindow.add(tableView);	
	
	loadingIcon.hide();
	
	// When a title is clicked, open a new window and pass the details of the selected posting.
	tableView.addEventListener('click', function(e) {

		if ( e.rowData.test ) {
			var newWin = Titanium.UI.createWindow({
				url : e.rowData.test, 
				title : e.rowData.title,
				barColor : Ti.UI.currentWindow.barColor
			});

			newWin.category = e.rowData.title;
		}

		Titanium.UI.currentTab.open( newWin, { animated : true } );
		
	});
	
});