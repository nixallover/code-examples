/**
 * DEPTH-FIRST SEARCH
 * use a stack OR add visited flag (you will have)
 * could be recursive
 */

function depthFirstSearch(root, matches) {
    const nodeStack = [];

    function found(node) {
        if (node === null) {
            return false;
        }

        if (!node.visited) {
            node.visited = true;
            nodeStack.push(node);
        }

        return matches(node.data);
    }

    if (found(root)) {
        return true;
    }

    while (nodeStack.length > 0) {
        const node = nodeStack.pop();

        if (found(node.left)) {
            return true;
        }

        if (found(node.right)) {
            return true;
        }
    }

    return false;
}