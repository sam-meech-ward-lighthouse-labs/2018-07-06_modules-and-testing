
// exports, require, module, __filename, __dirname

var stringFunctions = require('./stringFunctions');
var jazzy = require('./jazzy');
var cowsay = require("cowsay");


// or cowsay.think()

// console.log(jazzy(100));

// console.log(stringFunctions);


console.log(cowsay.say({
	text : jazzy(100),
	e : "👁👁",
	T : "👅"
}));