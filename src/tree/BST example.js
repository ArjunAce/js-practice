const BinarySearchTree = require('./BinarySearchTree');

let bst = new BinarySearchTree();
const nodeValues = [];
for (let index = 0; index < 10; index++) {
    nodeValues.push(Math.floor(Math.random() * 100));
    bst.addNode(bst.root, nodeValues[index]);
}
bst.inOrderTraversal(bst.root)
console.log("values", nodeValues.join("\t"));