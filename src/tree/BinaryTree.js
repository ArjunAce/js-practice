class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    addNode(value, insertAt) {
        if (insertAt == 0) {
            this.root = new TreeNode(value);
            return;
        }
        let nodeIndex = 0, tempNode = this.root;
        while (true) {
            let leftChild = 2 * nodeIndex + 1;
            if (leftChild == insertAt) {
                tempNode.left = new TreeNode(value);
                break;
            }
            let rightChild = leftChild + 1;
            if (rightChild == insertAt) {
                tempNode.right = new TreeNode(value);
                break;
            }
            let min = 2 * leftChild + 1;
            let max = min + 1;
            while (max < insertAt) {
                min = 2 * min + 1;
                max = 2 * max + 2;
            }
            if (min <= insertAt && insertAt <= max) {
                tempNode = tempNode.left;
                nodeIndex = leftChild;
            } else {
                tempNode = tempNode.right;
                nodeIndex = rightChild;
            }
        }
    }

    postOrderTraversal(node) {
        if (this.root == null)
            return;
        if (node.left) {
            this.postOrderTraversal(node.left);
        }
        if (node.right) {
            this.postOrderTraversal(node.right);
        }
        console.log(node.val);
    }
}
module.exports = BinaryTree;