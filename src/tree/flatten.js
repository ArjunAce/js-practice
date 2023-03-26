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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(!root) {
        return root;
    }
    function helper(root) {
        while(true) {
            if(!root.left && !root.right) {
                return root;
            } else if(!root.left && root.right) {
                root = root.right;
            } else if(root.left && !root.right) {
                root.right = root.left;
                root.left = null;
                root = root.right;
            } else {
                break;
            }
        }
        const temp = root.right;
        root.right = root.left;
        root.left = null;
        const flattened = helper(root.right);
        flattened.right = temp;
        return helper(flattened.right);
    }
    helper(root);
    return root;
};