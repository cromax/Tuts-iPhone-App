// Displays a list of the recent articles (titles) for a Tuts site.
var win = Ti.UI.currentWindow,
	query;

// Add loading icons. Note - needs to be removed after data is loaded, with loadingIcon.hide().
Ti.include('loading.js');

 // YQL query to get feed. 
// If selected ALL, queries a feed created with Yahoo pipes, containing all of the Tuts sites grouped into one RSS feed.
// Otherwise, just reference that site's respective RSS feed.
query = (Ti.App.Properties.getString('websiteName') === 'all')
	? "Select title, encoded, guid.content from rss where url='http://pipes.yahoo.com/pipes/pipe.run?_id=de585e903ac6feb6388eccbf43d3e208&_render=rss'"
	: "Select title, encoded, guid.content, category from rss where url='http://feeds.feedburner.com/" + Ti.App.Properties.getString('websiteName') + "tuts' | unique(field='guid')";

Ti.Yahoo.yql(query, function(e) {		
	var data = e.data,
		tableView = Ti.UI.createTableView(),
		newRow;

	// For each item from the total number of postings returned from the query...
	for ( var i = 0; i < data.item.length; i++ ) {
		newRow = Ti.UI.createTableViewRow({
			path : 'article.js', 
			desc : data.item[i].encoded, 
			url : data.item[i].guid,
		    hasChild : true,
			theTitle : data.item[i].title
		});

		// If viewing ALL, add a thumbnail, with each article, of the posting's respective Tuts site.
		if ( Ti.App.Properties.getString('websiteName') === 'all' ) {
			// .guid equals the url to the posting. I need to determine which Tuts 
			// site the url links to. Then I grab the name (like NET or PSD), and
			// use that string to reference the proper thumbnail for the posting.
			var siteName = data.item[i].guid.match(/^https?:\/\/([^.]+)/i)[1]; // guid equals something like - http://ae.tutsplus.com/?p=6357
			newRow.leftImage = '../images/tiny-' + siteName + '.jpg';
		}
			
		// Need label in order to change the font size. (sucks)
		var articleTitleLabel = Ti.UI.createLabel({
			text : data.item[i].title,
			left : 10,
			right : 30,
			font : {fontSize : 15, fontWeight: 'bold'}
		});
		
		// Will add little icon, so must compensate with more left-padding.
		if ( Ti.App.Properties.getString('websiteName') === 'all' ) { articleTitleLabel.left = 50 }
		
		newRow.add(articleTitleLabel);
		tableView.appendRow(newRow);
	} // end YQL
		
	// Populate a tableview with the titles
	Ti.UI.currentWindow.add(tableView);	
	
	// Data has been loaded/added, so remove the loading icon.
	loadingIcon.hide();
	
	// When a title is clicked, open a new window and pass the details of the selected posting.
	tableView.addEventListener('click', function(e) {
		if ( e.rowData.path ) {
			var newWin = Ti.UI.createWindow({
				url : e.rowData.path,
				title : e.rowData.theTitle,
				barColor : Ti.UI.currentWindow.barColor
			});
						
			// Add variables for the description and the url.
			newWin.desc = e.rowData.desc;
			newWin.theUrl = e.rowData.url;
		}

		Ti.UI.currentTab.open( newWin, { animated : true } );
		
	});
	
});