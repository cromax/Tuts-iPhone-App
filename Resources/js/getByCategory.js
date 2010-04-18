// Displays a list of the recent articles (titles) for a Tuts site, by category.

var win = Ti.UI.currentWindow,
	query;

// Add loading icons. Note - needs to be removed after data is loaded, with loadingIcon.hide().
Ti.include('loading.js');

 // Make YQL query to get list of postings BY CATEGORY, represented by win.category.
query = "Select title, encoded, guid.content, category from rss where url='http://feeds.feedburner.com/" + Ti.App.Properties.getString('websiteName') + "tuts' and category='" + win.category + "'";

Ti.Yahoo.yql(query, function(e) {		
	var data = e.data,
		tableView = Ti.UI.createTableView();
	
	// Weird issue with the RSS feed IF only one single item is returned. HATE that I have to do this. Could use work/cleaning up. 
	if ( e.data.item instanceof Array ) {
		for ( var i = 0; i < data.item.length; i++ ) {
			var newRow = Ti.UI.createTableViewRow({
				test : 'article.js', 
				desc : data.item[i].encoded, 
				url : data.item[i].guid,
			    hasChild : true,
				theTitle : data.item[i].title
			});

			// Need label in order to change the font size. (sucks)
			var articleTitleLabel = Ti.UI.createLabel({
				text : data.item[i].title,
				left : 10,
				right : 30,
				font : {fontSize : 15, fontWeight: 'bold'}
			});
		}
	} // end if array of items
	
	// Again, this duplicated code sucks on my part. 
	else {
		var newRow = Ti.UI.createTableViewRow({
			test : 'article.js', 
			desc : data.item.encoded, 
			url : data.item.guid,
		    hasChild : true,
			theTitle : data.item.title
		});

		// Need label in order to change the font size. (sucks)
		var articleTitleLabel = Ti.UI.createLabel({
			text : data.item.title,
			left : 10,
			right : 30,
			font : {fontSize : 15, fontWeight: 'bold'}
		});
	} // end else
	
	newRow.add(articleTitleLabel);
	tableView.appendRow(newRow);	
	
	// Populate a tableview with the titles
	win.add(tableView);	
	
	loadingIcon.hide();
	
	// When a title is clicked, open a new window and pass the details of the selected posting.
	tableView.addEventListener('click', function(e) {
		if ( e.rowData.test ) {
			var newWin = Ti.UI.createWindow({
				url : e.rowData.test,
				title : e.rowData.theTitle,
				barColor : win.barColor
			});
			newWin.desc = e.rowData.desc;
			newWin.theUrl = e.rowData.url;
			newWin.theTitle = e.rowData.theTitle;	
		}

		Ti.UI.currentTab.open( newWin, { animated : false, fullscreen : true } );
	});
	

	
});