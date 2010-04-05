var rows = [
	{ title : 'Most Recent', hasChild:true, path : 'getFeed.js' },
	{ title : 'View Categories', hasChild:true, path : 'categories.js' },	
];

var tableView = Ti.UI.createTableView({
	data : rows
});
Ti.UI.currentWindow.add(tableView);

tableView.addEventListener('click', function(e) {
	
	var newWindow = Ti.UI.createWindow({
		url : e.rowData.path,
		title : e.rowData.title,
		barColor : Ti.UI.currentWindow.barColor
	})

	if ( e.rowData.path ) {
		Ti.UI.currentTab.open(newWindow, {animated: true});
	}
	
});






