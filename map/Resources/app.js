	
	
	var win=Ti.UI.createWindow({backgroundColor:'#FFF'});
	
	var iitm = Titanium.Map.createAnnotation({
	    latitude:12.991056,
	    longitude:80.24303,
	    title:"IIT Madras Research Park",
	    subtitle:'Taramani, Chennai, IN',
	    pincolor:Titanium.Map.ANNOTATION_RED,
	    animate:true,	    
	    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	});
	 
	var mapview = Titanium.Map.createView({
	    mapType: Titanium.Map.STANDARD_TYPE,
	    region: {latitude:12.991056, longitude:80.24303, 
	            latitudeDelta:0.01, longitudeDelta:0.01},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	    annotations:[iitm]
	});
	 
	win.add(mapview);
	win.open();
