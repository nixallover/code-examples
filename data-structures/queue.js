function Queue(){
  var items = [];

  this.enqueue = function(value){
    items.push(value);
  }

  this.dequeue = function(){
    return items.shift();
  }

  this.front = function(value){
    return items[0];
  }

  this.isEmpty = function(value){
    return items.length === 0;
  }

  this.size = function(){
    return items.length;
  }

  this.print = function(){
    console.log(items.toString());
  }
}

console.log('Queue implementation test');

var queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue("Jack");
queue.enqueue("Alana");
queue.enqueue("Xena");
queue.print();
queue.dequeue();
queue.print();
console.log(queue.isEmpty());
