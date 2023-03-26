class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function addNode(node) {
    if (this.HEAD == null) {
        this.HEAD = node;
        return;
    }
    let tempNode = this.HEAD;
    while (tempNode.next) {
        tempNode = tempNode.next;
    }
    tempNode.next = node;
}
function remove(node) {
    if (this.HEAD == null || !node)
        return;
    if (this.HEAD == node) {
        this.HEAD = this.HEAD.next;
        return;
    }
    let tempNode = this.HEAD;
    while (tempNode.next !== node && tempNode.next) {
        tempNode = tempNode.next;
    }
    if (tempNode.next === node)
        tempNode.next = tempNode.next.next;
}
function traverse() {
    if (this.HEAD == null)
        return;
    let tempNode = this.HEAD;
    let output = "";
    while (tempNode.next) {
        output += tempNode.val + "\t";
        tempNode = tempNode.next;
    }
    output += tempNode.val + "\t";
    console.log(output);
}
function search(value) {
    if (this.HEAD == null)
        return null;
    let tempNode = this.HEAD;
    while (tempNode.val !== value && tempNode.next) {
        tempNode = tempNode.next;
    }
    if (tempNode.val === value)
        return tempNode;
    return null;
}

module.exports = {
    Node,
    HEAD: null,
    addNode,
    remove,
    traverse,
    search
}