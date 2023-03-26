const BinaryTree = require('./BinaryTree');

var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root], output = [], tempArray = [], elementsCount = 1;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        tempArray.push(node.val);
        if (elementsCount === tempArray.length) {
            output.push(tempArray);
            tempArray = [];
            elementsCount = queue.length;
        }
    }
    return output;
};

levelOrder = function (root) {
    const queue = [{ node: root, depth: 0 }];
    const result = [];
    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        if (!node)
            continue;
        if (result[depth]) {
            result[depth].push(node.val);
        } else {
            result[depth] = [node.val];
        }
        queue.push({ node: node.left, depth: depth + 1 });
        queue.push({ node: node.right, depth: depth + 1 });
    }
    return result;
};