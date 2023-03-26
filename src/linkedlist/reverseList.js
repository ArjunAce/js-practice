const LinkedList = require('./LinkedList');


var reverseList = function (head) {
    if (head == null || head.next == null)
        return head;
    let temp = head, prev = null, temp2;
    while (temp.next) {
        temp2 = temp.next;
        temp.next = prev;
        prev = temp;
        temp = temp2;
    }
    temp.next = prev;
    return temp;
};


reverseList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let current = head, previous = null, next;
    while (current.next) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    current.next = previous;
    return current;
}
const reverseListRecursive = function (head) {
    if (!head || !head.next)
        return head;

    const reversedList = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return reversedList;
}


const listStub = (nodes) => {
    console.log("TEST");
    LinkedList.HEAD = null;
    for (let i = 0; i < nodes.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes[i]));
    LinkedList.traverse();
    LinkedList.HEAD = reverseListRecursive(LinkedList.HEAD);
    LinkedList.traverse();
}




listStub([]);
listStub([1]);
listStub([1, 2]);
listStub([1, 2, 3]);
listStub([1, 2, 3, 4, 5]);