function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    const visitedNodes = new Map();

    const getClonedNode = (node) => {
        if (!node)
            return node;
        if (visitedNodes.has(node.val))
            return visitedNodes.get(node.val);
        const clonedNode = new Node(node.val, []);
        visitedNodes.set(node.val, clonedNode);
        for(const neighbor of node.neighbors) {
            clonedNode.neighbors.push(getClonedNode(neighbor));
        }
        return clonedNode;
    }
    return getClonedNode(node);
};