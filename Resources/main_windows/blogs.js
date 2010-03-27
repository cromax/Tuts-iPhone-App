var data = [
	{ title : 'Nettuts', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/nettuts.jpg', leftImage : '../images/tiny-net.jpg' },
	{ title : 'Vectortuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/vectortuts.jpg', leftImage : '../images/tiny-vector.jpg'},
	{ title : 'Psdtuts', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/psdtuts.jpg', leftImage : '../images/tiny-psd.jpg'},
	{ title : 'Aetuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/aetuts.jpg', leftImage : '../images/tiny-ae.jpg'},
	{ title : 'Cgtuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/cgtuts.jpg', leftImage : '../images/tiny-cg.jpg'},
	{ title : 'Phototuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/phototuts.jpg', leftImage : '../images/tiny-photo.jpg'},	
	{ title : 'Audiotuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/audiotuts.jpg', leftImage : '../images/tiny-audio.jpg'},	
];

var tableView = Titanium.UI.createTableView({
	data : data
});


tableView.addEventListener('click', function(e) {
	
	if ( e.rowData.path ) {
		var newWindow = Titanium.UI.createWindow({
			url : e.rowData.path,
			title : e.rowData.title,
			titleImage : e.rowData.titleImage
	});
		var site = e.rowData.title.split('tuts')[0];
		Titanium.App.Properties.setString('site', site);
		
		Titanium.UI.currentTab.open( newWindow, { animated: true } );
	}
	
});


Titanium.UI.currentWindow.add(tableView);