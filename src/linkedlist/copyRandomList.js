/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    };

    function duplicateNodes(head) {
        while (head) {
            head.next = new Node(head.val, head.next, null);
            head = head.next.next;
        }
    }
    function copyRandomPointers(head) {
        while (head) {
            if (head.random) {
                head.next.random = head.random.next;
            }
            head = head.next.next;
        }
    }

    function getDeepCopy(head) {
        let copy = head.next, temp = copy;
        while (temp.next) {
            head.next = temp.next;
            head = head.next;
            temp.next = temp.next.next;
            temp = temp.next;
        }
        head.next = null;
        return copy;
    }

    if (!head) return null;
    duplicateNodes(head);
    copyRandomPointers(head);
    return getDeepCopy(head);
};