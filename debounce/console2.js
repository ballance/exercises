var assert = require('assert');
var debounce = require('./debounce.js');

var done = function() {} 

var now = new Date();
var debounced = debounce(function() {
 assert(new Date() - now >= 10);
 done();
}, 10);

//var debounced = debounce(function() { console.log('debounced ran');}, 100);

debounced;