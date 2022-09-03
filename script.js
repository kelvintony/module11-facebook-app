
// Code starts here
var userNamePrompt= prompt("Enter username:");
var passwordPrompt= prompt("Enter password:");

var database= [
	{
		userName: "kelvin",
		password: "1234"
	},
	{
		userName: "netrone",
		password: "1234"
	}
];

var newsFeed= [
	{
		userName: "Emeka",
		timeline: "so tired from all learning today"
	},
	{
		userName: "chuks",
		timeline: "javascript is so cool"
	}
];

function isUserValid(username, password){
	for (var i = 0; i < database.length; i++) {
		if(username===database[i].userName && password===database[i].password){
			return true;
		}
	}
	return false;
}

alert("pls always check your console for result");


function SignIn(username,password){
	if(isUserValid(username,password)){
		for (var i = 0; i < newsFeed.length; i++) {
			console.log("NewsFeed from "+newsFeed[i].userName+"\n"+"---"+newsFeed[i].timeline);
		}
	}else{
		alert("Oops!, wrong username and password");
	}
}

SignIn(userNamePrompt,passwordPrompt);

