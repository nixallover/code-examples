/**
 * TRIE DATA STRUCTURE
 * 
 * helper functions
 * _addNode
 * _removeNode
 * _contains
 * _getWords
 * 
 * node
 * trie (defines root)
 * add
 * remove
 * contains
 * countWords
 * getWords
 * print
 * printByLevel
 * 
 * http://blog.benoitvallon.com/data-structures-in-javascript/the-trie-data-structure/
 */

function Node(data) {
    this.data = data;
    this.isWord = false;
    this.prefixes = 0;
    this.children = {};
}

function Trie() {
    this.root = new Node('');
}

Trie.prototype.add = function(word) {
    // if there's no root, things didn't get initialized properly
    // big error!
    if (!this.root) {
        return null;
    }
    this._addNode(this.root, word);
};

Trie.prototype._addNode = function(node, word) {
    // if there's nothing left to process, return
    if (!node || !word) {
        return null;
    }

    // since there's more to process, add a prefix
    node.prefixes++;

    // reference the first letter in the remainder
    let letter = word.charAt(0);

    // check the current node's children for that letter
    // if it doesn't exist, create a new node with that
    // letter and assign it to that node's children obj
    let child = node.children[letter];
    if (!child) {
        child = new Node(letter);
        node.children[letter] = child;
    }

    // remainder is everything after the current letter
    // check remainder of word - if at the end,
    // set isWord flag to true
    let remainder = word.substring(1);
    if (!remainder) {
        child.isWord = true;
    }

    // recurse
    this._addNode(child, remainder);
};


Trie.prototype.remove = function(word) {
    // if there's no root, things didn't get initialized properly
    // big error!
    if (!this.root) {
        return;
    }
    // if the trie currently contains the word, remove 
    if (this.contains(word)) {
        this._removeNode(this.root, word);
    }
};

Trie.prototype._removeNode = function(node, word) {
    // if there's nothing left to process, return
    if (!node || !word) {
        return;
    }

    node.prefixes--;

    let letter = word.charAt(0);

    let child = node.children[letter];
    if (child) {
        let remainder = word.substring(1);

        // if there's more word there,
        // check if it is the prefix for more than
        // just the word we're removing
        // 
        if (remainder) {
            if (child.prefixes === 1) {
                delete node.children[letter];
            } else {
                this._removeNode(child, remainder);
            }
        } else {
            if (child.prefixes === 0) {
                delete node.children[letter];
            } else {
                child.isWord = false;
            }
        }
    }
};

Trie.prototype.contains = function(word) {
    if (!this.root) {
        return false;
    }
    return this._contains(this.root, word);
}

Trie.prototype._contains = function(node, word) {
    if (!node || !word) {
        return false;
    }

    let letter = word.charAt(0);
    let child = node.children[letter];

    if (child) {
        let remainder = word.substring(1);
        if (!remainder && child.isWord) {
            return true;
        } else {
            return this._contains(child, remainder);
        }
    }
}

Trie.prototype.countWords = function() {
    if (!this.root) {
        return console.log('No root node found');
    }

    let queue = [this.root];
    let counter = 0;

    while (queue.length > 0) {
        let node = queue.shift();
        
        // found a word, add to counter
        if (node.isWord) {
            counter++;
        }

        // push each child onto queue
        for (const child in node.children) {
            if (node.children.hasOwnProperty(child)) {
                queue.push(node.children[child]);
            }
        }
    }

    return counter;
}

Trie.prototype.getWords = function() {
    let words = [];
    let current = '';

    this._getWords(this.root, words, current);
    return words;
};

Trie.prototype._getWords = function() {
    for (const child in node.children) {
        if (node.children.hasOwnProperty(child)) {
            word += child;

            // if this is the end, add word to arr
            if (node.children[child].isWord) {
                words.push(word);
            }

            // if not the end, recurse
            this._getWords(node.children[child], words, word);
            word = word.substring(0, word.length-1);
        }
    }
};

Trie.prototype.print = function() {

}