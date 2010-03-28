// Displays a list of the recent articles (titles) for a Tuts site.
var win = Titanium.UI.currentWindow,
	rows = [],
	query;

// ADD LOADING ICON
var loadingIcon = Titanium.UI.createActivityIndicator({
    top:'auto', 
    height:50,
    width:210,
	color : 'black',
	font : {fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'},
	message : 'Just a Sec...',
    style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
});
loadingIcon.show();
win.add(loadingIcon);

 // Make YQL query to get feed.
query = (Titanium.App.Properties.getString('site') === 'All')
	? "Select title, encoded, guid.content from rss where url='http://pipes.yahoo.com/pipes/pipe.run?_id=de585e903ac6feb6388eccbf43d3e208&_render=rss'"
	: "Select title, encoded, origLink from rss where url='http://feeds.feedburner.com/" + Titanium.App.Properties.getString('site') + "tuts'";

Titanium.Yahoo.yql(query, function(e) {		
	var data = e.data,
		tableView = Titanium.UI.createTableView();

	for ( var i = 0; i < data.item.length; i++ ) {
		var newRow1 = {
			test : 'article.js', 
			description : data.item[i].encoded, 
			url : data.item[i].guid,
			title : data.item[i].title
		};
		
		var newRow = Titanium.UI.createTableViewRow({
			test : 'article.js', 
			description : data.item[i].encoded, 
			url : data.item[i].guid,
		    hasChild : true
		});

		// If viewing ALL, add a thumbnail with each article.
		if ( Titanium.App.Properties.getString('site') === 'All' ) {
			var siteName = data.item[i].guid.split('http://');
			siteName = siteName[1].split('.');
			newRow.leftImage = '../images/tiny-' + siteName[0] + '.jpg';
		}
			
		rows.push(newRow1);

		// Need label in order to change the font size. (sucks)
		var label = Ti.UI.createLabel({
			text : data.item[i].title,
			left : 10,
			right : 30,
			font : {fontSize : 15, fontWeight: 'bold'}
		});
		
		// Will add little icon, so must compensate with more left-padding.
		if ( Titanium.App.Properties.getString('site') === 'All' ) {
			label.left = 50
		}
		
		newRow.add(label);
		tableView.appendRow(newRow);
		
	}
		
	// Populate a tableview with the titles
	Titanium.UI.currentWindow.add(tableView);	
	
	loadingIcon.hide();
	
	// When a title is clicked, open a new window and pass the details of the selected posting.
	tableView.addEventListener('click', function(e) {

		if ( e.rowData.test ) {

			var newWindow = Titanium.UI.createWindow({
				url : rows[e.index].test, 
				title : rows[e.index].title,
				transition : Titanium.UI.iPhone.AnimationStyle.CURL_UP
			});
			
			Titanium.App.Properties.setString('description', rows[e.index].description);
			Titanium.App.Properties.setString('url', rows[e.index].url);
			Titanium.App.Properties.setString('title', rows[e.index].title);	
		}

		Titanium.UI.currentTab.open( newWindow, { animated : true } );
		
	});
	
});