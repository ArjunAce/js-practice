const LinkedList = require('./LinkedList');


/* *
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummy = { val: - 1, next: head };
    head = dummy;

    while (head.next) {
        if (head.next.val === val)
            head.next = head.next.next;
        else
            head = head.next;
    }
    return dummy.next;
};



const listStub = (nodes, val) => {
    LinkedList.HEAD = null;
    for (let i = 0; i < nodes.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes[i]));
    LinkedList.traverse();
    LinkedList.HEAD = removeElements(LinkedList.HEAD, val);
    LinkedList.traverse();
}



listStub([1, 2, 6, 3, 4, 5, 6], 6); // [1,2,3,4,5]
listStub([], 1); // []
listStub([7, 7, 7, 7], 7); // []