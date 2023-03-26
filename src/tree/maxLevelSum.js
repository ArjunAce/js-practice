/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxLevelSum = function(root) {
    let level = null, maxSum = -Math.pow(2, 31), tempSum = -Math.pow(2, 31), tempDepth = 0;
    const queue = [{node: root, depth: 1}];
    while(queue.length > 0) {
        const {node, depth} = queue.shift();
        if(depth === tempDepth) {
            tempSum += node.val;
        } else {
            if(tempSum > maxSum) {
                level = depth - 1;
                maxSum = tempSum;
            }
            tempSum = node.val;
            tempDepth = depth;
        }
        if(node.left) {
            queue.push({node: node.left, depth: depth + 1});
        }
        if(node.right) {
            queue.push({node: node.right, depth: depth + 1});
        }
    }
    return tempSum > maxSum ? tempDepth : level;
};

maxLevelSum = function(root) {
    const nodeValues = new Map();
    const queue = [{node: root, level: 1}];
    while(queue.length > 0) {
        const {node, level} = queue.shift();
        if(!nodeValues.has(level)) {
            nodeValues.set(level, []);
        }
        nodeValues.set(level, nodeValues.get(level).push(node.val));
        if(node.left)
            queue.push({node: node.left, level: level + 1});
        if(node.right)
            queue.push({node: node.right, level: level + 1});
    }
    let maxSum = -Math.pow(2, 31), result;
    for(const [level, values] of nodeValues.entries()) {
        const sum = values.reduce((a, b) => a + b);
        if(sum > maxSum) {
            result = level;
        }
    }
    return result;
}