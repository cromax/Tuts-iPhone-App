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