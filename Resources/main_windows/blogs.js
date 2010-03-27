var data = [
    { title : 'All', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/tuts-home-logo.jpg', leftImage : '../images/tiny-all.jpg', site : 'all' },
	{ title : 'Nettuts', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/nettuts.jpg', leftImage : '../images/tiny-net.jpg', site : 'net' },
	{ title : 'Vectortuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/vectortuts.jpg', leftImage : '../images/tiny-vector.jpg', site : 'vector'},
	{ title : 'Psdtuts', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/psdtuts.jpg', leftImage : '../images/tiny-psd.jpg', site : 'psd' },
	{ title : 'Activetuts', hasChild:true, path : '../js/getFeed.js', titleImage : '../images/activetuts.jpg', leftImage : '../images/tiny-active.jpg', site : 'active'},	
	{ title : 'Aetuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/aetuts.jpg', leftImage : '../images/tiny-ae.jpg', site : 'ae'},
	{ title : 'Cgtuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/cgtuts.jpg', leftImage : '../images/tiny-cg.jpg', site : 'cg'},
	{ title : 'Phototuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/phototuts.jpg', leftImage : '../images/tiny-photo.jpg', site : 'photo'},	
	{ title : 'Audiotuts', hasChild:true, path : '../js/getFeed.js', titleImage :'../images/audiotuts.jpg', leftImage : '../images/tiny-audio.jpg', site : 'audio'},	
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
		if ( e.rowData.title.indexOf('tuts') > -1 ) {
			var site = e.rowData.title.split('tuts')[0];
			Titanium.App.Properties.setString('site', site); // still needed in getFeed?
			Titanium.App.Properties.setString('tutsName', e.rowData.site);			
		}
		else {
			Titanium.App.Properties.setString('site', e.rowData.title);
		}
		
		Titanium.UI.currentTab.open( newWindow, { animated: true } );
	}
	
});


Titanium.UI.currentWindow.add(tableView);