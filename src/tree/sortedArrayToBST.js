const BinarySearchTree = require('./BinarySearchTree');
const levelOrder = require('./levelOrder');

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var sortedArrayToBST = function (nums, left = 0, right) {
    if (right === undefined) right = nums.length - 1; // 4
    if (left > right) return null;
    let rootIndex = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[rootIndex]);
    root.left = sortedArrayToBST(nums, left, rootIndex - 1); // (0,1), (0,-1)
    root.right = sortedArrayToBST(nums, rootIndex + 1, right); // (1, 1)              (3, 4)
    return root;
};

sortedArrayToBST = function(nums) {
    function getCentralNode(nums, low, high) {
        const mid = Math.floor((high + low) / 2);
        console.log(low, high, mid);
        const node = new TreeNode(nums[mid]);
        if(low < mid) {
            node.left = getCentralNode(nums, low, mid - 1);
        }
        if(mid < high) {
            node.right = getCentralNode(nums, mid + 1, high);
        }
        return node;
    }
    return getCentralNode(nums, 0, nums.length - 1);
};

const treeStub = (nodeValues) => {
    let bt = sortedArrayToBST(nodeValues);
    console.log(levelOrder(bt));
}


treeStub([-10, -3, 0, 5, 9]);


