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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const path = [], result = [];
    const helper = (root) => {
        path.push(root.val);
        if (!root.left && !root.right) {
            result.push(path.join("->"));
        } else {
            if (root.left) helper(root.left);
            if (root.right) helper(root.right);
        }
        path.pop();
    };
    helper(root);
    return result;
};