function Set() {
  var items = {};

  this.has = function(value){
    //return value in items;
    return items.hasOwnProperty(value);
  }

  this.add = function(value){
    if(!this.has(value)){
      items[value] = value;
      return true;
    }
    return false;
  }

  this.remove = function(value){
    if(this.has(value)){
      delete items[value];
      return true;
    }
    return false;
  }

  this.clear = function(){
    items = {};
  }

  this.size = function(){
    // new
    // return Object.keys(items).length;

    // legacy
    var count = 0;
    for(var prop in items){
      if(items.hasOwnProperty(prop)){
        ++count;
      }
    }
    return count;
  }

  this.values = function(){
    // new
    //return Object.keys(items);

    // legacy
    var keys = [];
    for(var key in items){
      keys.push(key);
    }
    return keys;
  }


  // OPERATIONS

  this.union = function(otherSet){
    var unionSet = new Set();

    var values = this.values();
    for(var i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for(var i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }
    return unionSet;
  }


  this.intersection = function(otherSet){
    var intersectionSet = new Set();

    var values = this.values();
    for(var i=0; i<values.length; i++){
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }


  this.difference = function(otherSet){
    var differenceSet = new Set();

    var values = this.values();
    for(var i=0; i<values.length; i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }
  // subset
  this.subset = function(otherSet){
    if(this.size() > otherSet.size()){
      return false;
    } else {
      var values = this.values();
      for(var i=0; i<values.length; i++){
        if(!otherSet.has(values[i])){
          return false;
        }
      }
      return true;
    }
  }
}

console.log('Set implementation test');
// test
// var setA = new Set();
// setA.add(3);
// setA.add(4);
// setA.add(5);
// setA.add(6);
//
// var setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// setB.add(7);
//
// console.log(
//   setA.values(),
//   setB.values(),
//   setA.subset(setB)
// );
