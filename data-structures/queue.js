function Queue(){
  var items = [];

  // for basic queue
  // this.enqueue = function(value){
  //   items.push(value);
  // }

  // for priority queue
  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority){
    var queueElement = new QueueElement(element, priority);

    if(this.isEmpty()){
      items.push(queueElement);
    } else {
      var added = false;
      for(var i=0; i<items.length; i++){
        if(queueElement.priority < items[i].priority){
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if(!added){
        items.push(queueElement);
      }
    }
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
    // basic
    //console.log(items.toString());

    // priority
    let myString = "";
    for(var i=0; i<items.length; i++){
      myString += items[i].element + ' ';
    }
    console.log(myString);
  }
}

console.log('Queue implementation test');

var queue = new Queue();

// basic
// console.log(queue.isEmpty());
// queue.enqueue("Jack");
// queue.enqueue("Alana");
// queue.enqueue("Xena");
// queue.print();
// queue.dequeue();
// queue.print();
// console.log(queue.isEmpty());

// priority
console.log(queue.isEmpty());
queue.enqueue("Jack", 1);
queue.enqueue("Alana", 3);
queue.enqueue("Xena", 2);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.isEmpty());
