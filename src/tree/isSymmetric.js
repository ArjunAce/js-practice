const BinaryTree = require('./BinaryTree');

var isSymmetric = function (left, right) {
    if (!left && !right) {
        return true;
    }
    if (right === undefined) {
        return isSymmetric(left.left, left.right)
    }
    if (!left || !right || left.val != right.val)
        return false;
    return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
};



const treeStub = (nodeValues) => {
    let bt = new BinaryTree();
    for (let i = 0; i < nodeValues.length; i++) {
        bt.addNode(nodeValues[i], i);
    }
    // bt.postOrderTraversal(bt.root);
    console.log(isSymmetric(bt.root));
}

treeStub([1, 0]);