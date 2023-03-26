const BinaryTree = require('./BinaryTree');


var maxDepth = function (root) {
    if (root == null)
        return 0;
    if (root.left == null && root.right == null)
        return 1;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};



const treeStub = (nodeValues) => {
    let bt = new BinaryTree();
    for (let i = 0; i < nodeValues.length; i++) {
        bt.addNode(nodeValues[i], i);
    }
    // bt.postOrderTraversal(bt.root);
    console.log(maxDepth(bt.root));
}

treeStub([3, 9, 20]);