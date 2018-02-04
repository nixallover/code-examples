/**
 * TREE
 * - node
 * - traverse DF, BF
 * - contains
 * - add
 * - remove
 * - findIndex
 * @param {} data 
 */

function Node(data) {
    this.data = data;
    this.next = null;
    this.children = [];
}

function Tree(data) {
    let node = new Node(data);
    this._root = node;
}

const tree = new Tree('CEO');

Tree.prototype.traverseDF = function(callback) {

    // recurse and IIFE
    (function recurse(currentNode) {
        for (let i = 0, length = currentNode.childen.length; i < length; i++) {
            recurse(currentNode.children[i]);
        }

        callback(currentNode);
    })(this._root);
}

Tree.prototype.traverseBF = function(callback) {
    let queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while(currentTree) {
        for (let i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue;
    }
}

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
}

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null, 
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('no parent');
    }
}