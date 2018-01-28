var app = document.getElementById("app");
var action = document.getElementById("action");
var topic = document.getElementById("topic");
var language = document.getElementById("language");
var tool = document.getElementById("tool");
var button = document.getElementById("button");
innovate();

function randIndex(max){
	return Math.floor(Math.random()*(max));
}

// The data object is defined in main.ejs
function innovate(){
	app.textContent = data.apps[randIndex(data.apps.length)];
	action.textContent = data.actions[randIndex(data.actions.length)];
	topic.textContent = data.topics[randIndex(data.topics.length)];
	language.textContent = data.languages[randIndex(data.languages.length)];
	tool.textContent = data.tools[randIndex(data.tools.length)];	
}
button.addEventListener("click", function(){innovate()});