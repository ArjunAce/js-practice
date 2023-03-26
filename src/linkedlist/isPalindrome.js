const LinkedList = require('./LinkedList');


var isPalindrome = function (head) {
    if (!head || !head.next)
        return true;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    let reversedListHead = prev;
    while (reversedListHead) {
        if (reversedListHead.val != head.val)
            return false;
        reversedListHead = reversedListHead.next;
        head = head.next;
    }
    return true;
};



const listStub = (nodes) => {
    LinkedList.HEAD = null;
    for (let i = 0; i < nodes.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes[i]));
    LinkedList.traverse();
    console.log(isPalindrome(LinkedList.HEAD));
}


listStub([1, 2, 1]); // false
listStub([1, 2, 2, 1]); // true