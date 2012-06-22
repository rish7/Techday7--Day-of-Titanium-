//Titanium.include('helper.js')

//Create Window
var win=Titanium.UI.createWindow({
 backgroundColor:'#509FD4',
navBarHidden:true});
//Create label
var label=Titanium.UI.createLabel({
color:'#F00',
top:'10px',
left:'40%',
text:'Welcome all'
});

//Add Label to Window
win.add(label);

//Create Textbox
var text=Titanium.UI.createTextField({
hintText:'Enter Name',
width:'250px',
top:'40px',
left:'10px',
color:'#000'
});
win.add(text);

//Create Button
var button=Titanium.UI.createButton({
title:'Say Hello to ',
width:'200px',
left:'10px',
top:'100px'
});
win.add(button);

button.addEventListener('click',function(e){
	
	alert(novar);
	alert(String.format('Hello %s',text.value));});


//To Open Window
win.open();
//var myBtn=require('helper2').createButtonWithEvent();
//win.add(myBtn);