const LinkedList = require('./LinkedList');


var mergeTwoLists = function (l1, l2) {
    if (l1 == null && l2 == null)
        return null;
    let temp_1 = l1, temp_2 = l2;
    LinkedList.HEAD = null;
    while (temp_1 && temp_2) {
        if (temp_1.val < temp_2.val) {
            LinkedList.addNode(new LinkedList.Node(temp_1.val));
            temp_1 = temp_1.next;
        } else {
            LinkedList.addNode(new LinkedList.Node(temp_2.val));
            temp_2 = temp_2.next;
        }
    }
    while (temp_1) {
        LinkedList.addNode(new LinkedList.Node(temp_1.val));
        temp_1 = temp_1.next;
    }
    while (temp_2) {
        LinkedList.addNode(new LinkedList.Node(temp_2.val));
        temp_2 = temp_2.next;
    }
    return LinkedList.HEAD;
};


mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) {
        return null;
    }

    let result = new ListNode();
    let temp = result;

    const addConsecutiveSmallerNodes = (list1, list2) => {
        while (list1 && (!list2 || list1.val <= list2.val)) {
            temp.next = new ListNode(list1.val);
            temp = temp.next;
            list1 = list1.next;
        }
        return list1;
    }

    while (l1 || l2) {
        l1 = addConsecutiveSmallerNodes(l1, l2);
        l2 = addConsecutiveSmallerNodes(l2, l1);
    }
    return result.next;
};

mergeTwoLists = function (l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    l1 = new ListNode(null, l1);
    let result = l1, temp;

    while(l1.next && l2.next) {
        if(l1.next.val > l2.val) {
            temp = l1.next;
            l1.next = l2;
            l2 = l2.next;
            l1.next.next = temp;
        }
        l1 = l1.next;
    }
    while(l1.next)
        l1 = l1.next;
    l1.next = l2;
    return result.next;
}

const listStub = (nodes1, nodes2) => {
    LinkedList.HEAD = null;
    for (let i = 0; i < nodes1.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes1[i]));
    let list1 = LinkedList.HEAD;
    LinkedList.traverse();

    LinkedList.HEAD = null;
    for (let i = 0; i < nodes2.length; i++)
        LinkedList.addNode(new LinkedList.Node(nodes2[i]));
    let list2 = LinkedList.HEAD;
    LinkedList.traverse();

    LinkedList.HEAD = mergeTwoLists(list1, list2);
    LinkedList.traverse();
}




listStub([1, 2, 4], [1, 3, 4]); // [1, 1, 2, 3, 4, 4]
listStub([], []); // []
listStub([], [0]); // [0]