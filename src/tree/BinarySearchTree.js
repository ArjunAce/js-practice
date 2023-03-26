class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    addNode(node, value) {
        if (this.root == null) {
            this.root = new TreeNode(value);
            return;
        }
        if (value <= node.val) {
            if (node.left == null) {
                node.left = new TreeNode(value);
            } else {
                this.addNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new TreeNode(value);
            } else {
                this.addNode(node.right, value);
            }
        }
    }

    contains(node, value) {
        if (this.root == null) {
            return false;
        }
        if (value == node.val) {
            return true;
        }
        if (value < node.val) {
            if (node.left == null)
                return false;
            else
                return this.contains(node.left, value);
        } else {
            if (node.right == null)
                return false;
            else
                return this.contains(node.right, value);
        }
    }

    inOrderTraversal(node) {
        if (this.root == null)
            return;
        if (node.left) {
            this.inOrderTraversal(node.left);
        }
        console.log(node.val);
        if (node.right) {
            this.inOrderTraversal(node.right);
        }
    }
}
module.exports = BinarySearchTree;