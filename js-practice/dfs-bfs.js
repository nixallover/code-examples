function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

/** 
 * DEPTH FIRST SEARCH (RECURSIVE)
 * if node is null, return
 * visit node and mark it/remove from stack
 * for each child node
 * add to stack OR check if visited, and if not, visit
 */
function searchDFS(root) {
    // base case - empty node
    if (root == null) return;

    // visit and mark as visited
    visit(root);
    root.visited = true;

    // check each adjacent node, and if it hasn't been 
    root.adjacent.forEach(n => {
        if (n.visited == false) {
            searchDFS(n);
        }
    });
}




/** 
 * BREADTH-FIRST SEARCH
 * iterative, use a queue
 * 
 * create queue
 * mark the root node and push it into the queue
 * loop over items in the queue
 *      dequeue item with shift
 *      visit item
 *      for each child item
 *          if not marked, mark and add to queue
 */
function searchBFS(root) {
    let queue = [];
    root.marked = true;
    queue.push(root);

    while(queue.length > 0) {
        let r = queue.shift();
        visit(r);

        r.adjacent.forEach(n => {
            if (n.marked == false) {
                n.marked = true;
                queue.push(n);
            }
        })
    }
}