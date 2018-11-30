/**
 * IMMEDIATE OBJECT INITIALIZATION
 * Define init steps as a method, wrap object in an IIFE, and call init method
 */

({
	maxWidth: 500,
	maxHeight: 600, 
	init: function(){
		console.log('init me!')
	}
}).init();