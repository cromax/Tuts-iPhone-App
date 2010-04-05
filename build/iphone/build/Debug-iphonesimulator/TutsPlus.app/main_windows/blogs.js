Ti.UI.currentWindow.barColor = '#aa3600';

var data = [
    { title : 'All', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/tuts-home-logo.jpg', leftImage : '../images/tiny-all.jpg', col : '#aa3600'},
	{ title : 'Nettuts', hasChild:true, path : '../js/tutorial-options.js', titleImage : '../images/nettuts.jpg', leftImage : '../images/tiny-net.jpg', col : '#2e6a60'},
	{ title : 'Vectortuts', hasChild:true, path : '../js/tutorial-options.js', titleImage :'../images/vectortuts.jpg', leftImage : '../images/tiny-vector.jpg', col : '#19487e'},
	{ title : 'Psdtuts', hasChild:true, path : '../js/tutorial-options.js', titleImage : '../images/psdtuts.jpg', leftImage : '../images/tiny-psd.jpg', col : '#a51500' },
	{ title : 'Activetuts', hasChild:true, path : '../js/tutorial-options.js', titleImage : '../images/activetuts.jpg', leftImage : '../images/tiny-active.jpg', col : '#a5290a'},	
	{ title : 'Aetuts', hasChild:true, path : '../js/tutorial-options.js', titleImage :'../images/aetuts.jpg', leftImage : '../images/tiny-ae.jpg', col : '#4a3a57'},
	{ title : 'Cgtuts', hasChild:true, path : '../js/tutorial-options.js', titleImage :'../images/cgtuts.jpg', leftImage : '../images/tiny-cg.jpg', col : '#73434f'},
	{ title : 'Phototuts', hasChild:true, path : '../js/tutorial-options.js', titleImage :'../images/phototuts.jpg', leftImage : '../images/tiny-photo.jpg', col : '#2e92b2'},	
	{ title : 'Audiotuts', hasChild:true, path : '../js/tutorial-options.js', titleImage :'../images/audiotuts.jpg', leftImage : '../images/tiny-audio.jpg', col : '#3d6b00'},	
];

// Create table and fill it with list of Tuts sites
var tableView = Titanium.UI.createTableView({
	data : data
});
Titanium.UI.currentWindow.add(tableView);

// When item is clicked on, create new window.
tableView.addEventListener('click', function(e) {

	if ( e.rowData.path ) {
		var newWindow = Titanium.UI.createWindow({
			url : e.rowData.path,
			title : e.rowData.title,
			titleImage : e.rowData.titleImage,
			barColor : data[e.index].col
	});
		if ( e.rowData.title.indexOf('tuts') > -1 ) {
			// for retrieving the RSS feed. "site" contains the site name (like NET or VECTOR)
			var site = e.rowData.title.split('tuts')[0];

			// because the ActiveTuts site still uses Flashtuts as its RSS feed name.
			if ( site === 'Active' ) site = 'Flash'; 
			
			// Such as - site = Net
			Ti.App.Properties.setString('websiteName', site); 
		}
		// site = All
		else Ti.App.Properties.setString('websiteName', 'all');

		Titanium.UI.currentTab.open( newWindow, { animated: true } );
	}
	
});

