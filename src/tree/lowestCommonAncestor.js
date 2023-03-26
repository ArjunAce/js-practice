/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const getPath = (root, node) => {
        const path = [];
        const nodePresentIn = (parent) => {
            path.push(parent);
            if (parent === node)
                return true;
            if (parent.left && nodePresentIn(parent.left))
                return true;
            if (parent.right && nodePresentIn(parent.right))
                return true;
            path.pop();
            return false;
        }
        nodePresentIn(root);
        return path;
    }
    const pathToA = getPath(root, p);
    const pathToB = getPath(root, q);

    let i = 0;
    while (pathToA[i + 1] === pathToB[i + 1])
        i++;
    return pathToA[i];
};