function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function Tree(data) {
console.log(`tree inited with value ${data}`);
    let node = new Node(data);
    this._root = node;
}

// add node
Tree.prototype.addNode = function(data) {
    let node = new Node(data);
    console.log('add node!', node);

    this._addNode(node, this._root);
}

Tree.prototype._addNode = function(node, parent) {
    // if new node's data is less than current
    if (parent.data < node.data) {
        //console.log(`parent ${parent.data} lt curr ${node.data}, going to right`);
        if (parent.right == null) {
            parent.right = node;
        } else {
            this._addNode(node, parent.right);
        }
    } else if (parent.data > node.data) {
        //console.log(`parent ${parent.data} gt curr ${node.data}, going to left`);
        if (parent.left == null) {
            parent.left = node;
        } else {
            this._addNode(node, parent.left);
        }
    }
}

// return boolean value indicating if the data is contained 
// in a node in the tree
Tree.prototype.searchDFS = function(data) {
    console.log('search DFS');
    return this._searchDFS(this._root, data);
}

Tree.prototype._searchDFS = function(node, data) {
    console.log('searching ', node, data);
    if (node == null) {
        return;
    }

    if (node.data === data) {
        return true;
    } else {
        return false;
    }
}

// remove node
// DFS
// BFS


// testing
let tree = new Tree(4);
tree.addNode(6);
tree.addNode(10);
tree.addNode(2);

console.log(tree.searchDFS(10));

console.log(tree);