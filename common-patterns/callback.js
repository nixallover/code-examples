// callback pattern

var findNodes = function(callback) {
	var i = 10000,
		nodes = [],
		found;

	// check if callback is callable!!
	if (typeof callback !== "function") {
		callback = false;
	}

	while (i) {
		 i -= 1;
		 // logic here
		 if(callback){
		 	callback(found);
		 }

		 nodes.push(found);
	}

	return nodes;
}