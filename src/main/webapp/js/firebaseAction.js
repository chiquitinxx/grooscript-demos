//Grooscript converted file
var firebase = GrooscriptFirebase();
var message = gs.map().add("list",gs.list([1 , 2 , 3])).add("number",5).add("name","grooscript");
gs.mc(gs.mc(this,"$",["body"]),"append",["<h3>Send message: " + (message) + "</h3>"]);
gs.sp(firebase,"message",message);
gs.mc(gs.mc(this,"$",["body"]),"append",["<h3>Done synchronous!</h3>"]);
