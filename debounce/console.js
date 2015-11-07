var assert = require('assert');
var debounce = require('./debouncer.js');

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

var methodToPassIn = function() 
	{
		//sleep(1000, function() {});
		console.log('hello' + i);	
	}

for (var i = 1; i<=3; i++)
{
	debounce(methodToPassIn, 200);
}