exports.createButtonWithEvent=function(){	
	var btn=Titanium.UI.createButton({
		title:'I fire on tap',
		width:'200px'
	});
	
	btn.addEventListener('click',function(e){
		alert('You call me?');		
	});	
	
	return btn;
};
