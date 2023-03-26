const LinkedList = require('./LinkedList');


var deleteNodeWithoutHead = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};



const listStub = (nodes, nodeValueToDelete) => {
    LinkedList.HEAD = null;
    for (let i = 0; i < nodes.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes[i]));
    LinkedList.traverse();
    deleteNodeWithoutHead(LinkedList.search(nodeValueToDelete));
    LinkedList.traverse();
}




listStub([4, 5, 1, 9], 1); // [4, 5, 9]
listStub([1, 2, 3, 4], 3); // [1, 2, 4]
listStub([0, 1], 0); // [1]
listStub([-3, 5, -99], -3); // [5, -99]