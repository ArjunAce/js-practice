const LinkedList = require('./LinkedList');


var removeNthFromEnd = function (head, n) {
    let temp = head;
    let nodeToDelete = head;
    while (n--) {
        temp = temp.next;
    }
    if (!temp) {
        return head.next;
    }
    while (temp.next) {
        temp = temp.next;
        nodeToDelete = nodeToDelete.next;
    }
    nodeToDelete.next = nodeToDelete.next.next;
    return head;
};

removeNthFromEnd = function (head, n) {
    let fastPointer = head;
    while (n-- > 0)
        fastPointer = fastPointer.next;
    if (!fastPointer) {
        head = head.next;
        return head;
    }
    let slowPointer = head;
    while (fastPointer.next) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }
    slowPointer.next = slowPointer.next.next;
    return head;
};

const listStub = (nodes, nodeToDeleteFromEnd) => {
    LinkedList.HEAD = null;
    for (let i = 0; i < nodes.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes[i]));
    LinkedList.traverse();
    LinkedList.HEAD = removeNthFromEnd(LinkedList.HEAD, nodeToDeleteFromEnd);
    LinkedList.traverse();
}




listStub([1, 2, 3, 4, 5], 2); // [1,2,3,5]
listStub([1], 1); // []
listStub([1, 2], 1); // [1]