const LinkedList = require('./LinkedList');


/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = null, temp = null, carry = 0;

    while (l1 || l2) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        if (!result) {
            result = new ListNode(carry % 10);
            temp = result;
        } else {
            temp.next = new ListNode(carry % 10);
            temp = temp.next;
        }
        carry = Math.floor(carry / 10);
    }
    if (carry > 0) {
        temp.next = new ListNode(carry % 10);
    }
    return result;
};



const listStub = (list1, list2) => {
    LinkedList.HEAD = null;
    const l1 = LinkedList.HEAD;
    for (let i = 0; i < list1.length; i++)
        LinkedList.addNode(new LinkedList.Node(list1[i]));

    LinkedList.HEAD = null;
    const l2 = LinkedList.HEAD;
    for (let i = 0; i < list2.length; i++)
        LinkedList.addNode(new LinkedList.Node(list2[i]));

    l1.traverse();
    // console.log(isPalindrome(LinkedList.HEAD));
}


listStub([2, 4, 3], [5, 6, 4]); // [7,0,8]
listStub([0], [0]); // [0]
listStub([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]; // [8,9,9,9,0,0,0,1])