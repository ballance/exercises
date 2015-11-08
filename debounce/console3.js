// var assert = require('assert');
var debounce = require('./debounce.js');
var lastRun;

var called = 0;

var debounced = debounce(function() {
  called++;
}, 10);

// var debounced = function(methodToRun, timeout) {

// 	// console.log(this);
// 	try
// 	{
// 	    console.log('trying.')
// 		if (this.lastRun == null)
// 		{
// 			this.lastRun = Date.now();

// 			console.log('No previous runs.');
// 		} 
// 		else
// 		{
// 			var msSinceLastRun = Date.now() - this.lastRun;
// 			console.log('last ran ' + (msSinceLastRun) + 'ms ago at ' + new Date(this.lastRun) + '.');
// 			if (msSinceLastRun < timeout)
// 			{
// 				return null;
// 			}
// 		}

// 		setTimeout(methodToRun, timeout);
// 	}
// 	catch(err)
// 	{
// 		console.log('error: ' + err);
// 	}
// 	return null;
//  } 

debounced();
debounced();
debounced();
debounced();
