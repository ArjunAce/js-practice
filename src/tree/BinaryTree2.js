function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
class BinaryTree {
    createBinaryTree(arr) {
        if (arr.length === 0) {
            return null;
        }

        const nodes = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === null) {
                nodes.push(null);
            } else {
                nodes.push(new TreeNode(arr[i]));
            }
        }

        const root = nodes[0];
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i] !== null) {
                const leftIndex = i * 2 + 1;
                const rightIndex = i * 2 + 2;

                if (leftIndex < nodes.length) {
                    nodes[i].left = nodes[leftIndex];
                }
                if (rightIndex < nodes.length) {
                    nodes[i].right = nodes[rightIndex];
                }
            }
        }

        return root;
    }

    getNodesInArray(root) {
        if (!root) return [];
        const getMaxDepth = function (root) {
            if (!root) return 0;
            return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
        };

        const maxNodes = Math.pow(2, getMaxDepth(root)) - 1;
        let queue = [root];
        for (const n of queue) {
            if (n && n.left) {
                queue.push(n.left);
            } else if (queue.length < maxNodes) {
                queue.push(null);
            }
            if (n && n.right) {
                queue.push(n.right);
            } else if (queue.length < maxNodes) {
                queue.push(null);
            }
        }
        queue = queue.map(x => x ? x.val : x);
        while (queue[queue.length - 1] === null) queue.splice(queue.length - 1, 1);
        return queue;
    }
}
// const tree = new BinaryTree().createBinaryTree([1, null, 3, null, null, 6, 7, null, null, null, null, 12, 13, 14, 15]);
// const nodes = new BinaryTree().getNodesInArray(tree);

module.exports = BinaryTree;
