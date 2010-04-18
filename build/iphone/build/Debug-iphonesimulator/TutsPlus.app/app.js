// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('white');


// create tab group
var tabGroup = Ti.UI.createTabGroup();

var homeWindow = Ti.UI.createWindow({  
    title:'TutsPlus',
	titleImage : 'images/tuts-home-logo.jpg',
	url : 'main_windows/blogs.js'
});

var homeTab = Ti.UI.createTab({  
    icon : 'images/KS_nav_views.png',
    title:'Tutsplus',
    window:homeWindow
});


// About Tab
var aboutWindow = Ti.UI.createWindow({
	title : "About",
	url : 'main_windows/about.js'
});

var aboutTab = Ti.UI.createTab({
	icon : 'images/KS_nav_views.png',
	title : 'About',
	window: aboutWindow
});

// add tabs
tabGroup.addTab(homeTab); 
tabGroup.addTab(aboutTab);

// open tab group
tabGroup.open({
	transition:Ti.UI.iPhone.AnimationStyle.CURL_UP
});
