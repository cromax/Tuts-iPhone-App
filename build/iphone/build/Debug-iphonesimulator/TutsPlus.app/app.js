// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');


// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var homeWindow = Titanium.UI.createWindow({  
    title:'TutsPlus',
	titleImage : 'images/tuts-home-logo.jpg',
	url : 'main_windows/blogs.js'
});

var homeTab = Titanium.UI.createTab({  
    icon : 'images/KS_nav_views.png',
    title:'Tutsplus',
    window:homeWindow
});


// About Tab
var aboutWindow = Titanium.UI.createWindow({
	title : "About",
	url : 'main_windows/about.js'
});

var aboutTab = Titanium.UI.createTab({
	icon : 'images/KS_nav_views.png',
	title : 'About',
	window: aboutWindow
});

// add tabs
tabGroup.addTab(homeTab); 
tabGroup.addTab(aboutTab);

// open tab group
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP
});
