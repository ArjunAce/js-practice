const BinaryTree = require('./BinaryTree');

var isValidBST = function (root, rangeMin = -(Math.pow(2, 31) + 1), rangeMax = Math.pow(2, 31)) {
    if (!root) return true;
    if (!(rangeMin < root.val && root.val < rangeMax))
        return false;
    return isValidBST(root.left, rangeMin, root.val) && isValidBST(root.right, root.val, rangeMax);
};



const treeStub = (nodeValues) => {
    let bt = new BinaryTree();
    for (let i = 0; i < nodeValues.length; i++) {
        bt.addNode(nodeValues[i], i);
    }
    // bt.postOrderTraversal(bt.root);
    console.log(isValidBST(bt.root));
}

treeStub([9, 3, 20]);