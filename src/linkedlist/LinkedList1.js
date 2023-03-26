/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null;
    return this;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let i = 0, temp = this.head;
    while (i++ < index && temp) {
        temp = temp.next;
    }
    return temp ? temp.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.head = { val, next: this.head };
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if(!this.head) {
        this.head = { val, next: null };
        return;
    }
    let temp = this.head;
    while (temp && temp.next) {
        temp = temp.next;
    }
    temp.next = { val, next: null };
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    let i = 0, temp = this.head;
    while (i++ < index - 1 && temp) {
        temp = temp.next;
    }
    if (temp) {
        temp.next = { val, next: temp.next };
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.head && index === 0) {
        this.head = this.head.next;
        return;
    }
    let i = 0, temp = this.head;
    while (i++ < index - 1 && temp) {
        temp = temp.next;
    }
    if (temp && temp.next) {
        temp.next = temp.next.next;
    }
};


MyLinkedList.prototype.printLinkedList = function () {
    let temp = this.head;
    let result = "";
    while (temp) {
        result += " " + temp.val;
        temp = temp.next;
    }
    console.log(result + " null");
};


var obj = new MyLinkedList()
obj.printLinkedList();

obj.addAtHead(1)
obj.printLinkedList();

obj.addAtTail(3);
obj.printLinkedList();

obj.addAtIndex(1, 2);
obj.printLinkedList();

console.log(obj.get(1));

obj.deleteAtIndex(0);
obj.printLinkedList();

console.log(obj.get(0));


// [null,null,null,null,2,null,2]