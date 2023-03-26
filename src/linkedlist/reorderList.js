function getInterweavedList(list) {
    if (!list || !list.next || !list.next.next) {
        return list;
    }

    function splitList(list) {
        let slow = list, fast = list;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        const list2 = slow.next;
        slow.next = null
        return list2;
    }

    function reverseList(list) {
        let prev = null, curr = head, next;
        while (curr.next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        curr.next = prev;
        return curr;
    }

    function interweaveLists(list1, list2) {
        let result = list1;
        while (list1 && list2) {
            const temp1 = list1;
            const temp2 = list2;
            list1 = list1.next;
            list2 = list2.next;
            temp1.next = temp2;
            temp2.next = list1;
        }
        return result;
    }

    const secondHalf = splitList(list);
    return interweaveLists(list, reverseList(secondHalf));
}