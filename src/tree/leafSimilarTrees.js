// https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75
// Easy
const BinaryTree = require('./BinaryTree2');


var leafSimilar = function (root1, root2) {
    const getLeafSequence = (root) => {
        if (!root) return [null];
        if (!root.left && !root.right) return [root.val];
        return [...getLeafSequence(root.left), ...getLeafSequence(root.right)]
    }
    const leafSeq1 = getLeafSequence(root1).filter(x => x !== null);
    const leafSeq2 = getLeafSequence(root2).filter(x => x !== null);
    console.log(leafSeq1);
    console.log(leafSeq2);
    if (leafSeq1.length !== leafSeq2.length)
        return false;
    for (let i = 0; i < leafSeq1.length; i++) {
        if (leafSeq1[i] !== leafSeq2[i])
            return false;
    }
    return true;
};



const Tree = new BinaryTree();
const root1 = Tree.createBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
const root2 = Tree.createBinaryTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);
// console.log(Tree.getNodesInArray(root1));
// console.log(Tree.getNodesInArray(root2));
const res = leafSimilar(root1, root2)
console.log(res);