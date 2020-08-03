"use strict";
class LinkNode {
    constructor(v) {
        this.next = this;
        this.pre = this;
        this.value = v;
    }
}
const emptyNode = new LinkNode(0);
class DoubleLinkedList {
    constructor(defaultT) {
        this.defaultT = defaultT;
        this._head = emptyNode;
        this._tail = emptyNode;
        this._size = 0;
        this._head = this._tail = emptyNode;
    }
    get(index) {
        const node = this.getNode(index);
        return node == emptyNode ? this.defaultT : node.value;
    }
    get size() {
        return this._size;
    }
    get tail() {
        return this._tail;
    }
    get head() {
        return this._head;
    }
    getNode(index) {
        if (index < 0 || index >= this._size) {
            return emptyNode;
        }
        let node = this._head;
        while (index--) {
            node = node.next;
        }
        return node;
    }
    addAtHead(val) {
        const node = new LinkNode(val);
        this.addNodeAtIndex(node, 0);
        return node;
    }
    addAtTail(val) {
        const node = new LinkNode(val);
        this.addNodeAtIndex(node, this._size);
        return node;
    }
    addAtIndex(index, val) {
        const node = new LinkNode(val);
        this.addNodeAtIndex(node, index);
        return node;
    }
    deleteAtIndex(index) {
        const node = this.getNode(index);
        if (node == emptyNode) {
            return null;
        }
        this.deleteNode(node);
        return node;
    }
    deleteNode(node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        this._size--;
        if (this._size == 0) {
            this._head = this._tail = emptyNode;
        }
        else if (node == this._head) {
            this._head = this._head.next;
        }
        else if (node == this._tail) {
            this._tail = this._tail.pre;
        }
    }
    addNodeAtIndex(node, index) {
        if (this._size == 0) {
            this._size++;
            this._head = this._tail = node;
            return;
        }
        let cur = index == this._size ? this._head : this.getNode(index);
        if (cur == emptyNode) {
            return;
        }
        cur.pre.next = node;
        node.pre = cur.pre;
        cur.pre = node;
        node.next = cur;
        if (index == 0) {
            this._head = node;
        }
        else if (index == this._size) {
            this._tail = node;
        }
        this._size++;
    }
    print() {
        let node = this._head;
        let results = [];
        while (node) {
            results.push(node.value);
            if (node == this._tail) {
                break;
            }
            node = node.next;
        }
        console.log(results.join(' -> '));
    }
}
class MyLinkedList extends DoubleLinkedList {
    constructor() {
        super(-1);
    }
}
const list = new MyLinkedList();
function test(cmds, data) {
    cmds.forEach((v, i) => {
        if (i == 0) {
            return;
        }
        const result = list[v].call(list, ...data[i]);
        console.log("==", result, v, ...data[i]);
        list.print();
    });
}
test(["MyLinkedList", "addAtHead", "addAtTail", "addAtTail", "get", "get", "addAtTail", "addAtIndex", "addAtHead", "addAtHead", "addAtTail", "addAtTail", "addAtTail", "addAtTail", "get", "addAtHead", "addAtHead", "addAtIndex", "addAtIndex", "addAtHead", "addAtTail", "deleteAtIndex", "addAtHead", "addAtHead", "addAtIndex", "addAtTail", "get", "addAtIndex", "addAtTail", "addAtHead", "addAtHead", "addAtIndex", "addAtTail", "addAtHead", "addAtHead", "get", "deleteAtIndex", "addAtTail", "addAtTail", "addAtHead", "addAtTail", "get", "deleteAtIndex", "addAtTail", "addAtHead", "addAtTail", "deleteAtIndex", "addAtTail", "deleteAtIndex", "addAtIndex", "deleteAtIndex", "addAtTail", "addAtHead", "addAtIndex", "addAtHead", "addAtHead", "get", "addAtHead", "get", "addAtHead", "deleteAtIndex", "get", "addAtHead", "addAtTail", "get", "addAtHead", "get", "addAtTail", "get", "addAtTail", "addAtHead", "addAtIndex", "addAtIndex", "addAtHead", "addAtHead", "deleteAtIndex", "get", "addAtHead", "addAtIndex", "addAtTail", "get", "addAtIndex", "get", "addAtIndex", "get", "addAtIndex", "addAtIndex", "addAtHead", "addAtHead", "addAtTail", "addAtIndex", "get", "addAtHead", "addAtTail", "addAtTail", "addAtHead", "get", "addAtTail", "addAtHead", "addAtTail", "get", "addAtIndex"], [[], [84], [2], [39], [3], [1], [42], [1, 80], [14], [1], [53], [98], [19], [12], [2], [16], [33], [4, 17], [6, 8], [37], [43], [11], [80], [31], [13, 23], [17], [4], [10, 0], [21], [73], [22], [24, 37], [14], [97], [8], [6], [17], [50], [28], [76], [79], [18], [30], [5], [9], [83], [3], [40], [26], [20, 90], [30], [40], [56], [15, 23], [51], [21], [26], [83], [30], [12], [8], [4], [20], [45], [10], [56], [18], [33], [2], [70], [57], [31, 24], [16, 92], [40], [23], [26], [1], [92], [3, 78], [42], [18], [39, 9], [13], [33, 17], [51], [18, 95], [18, 33], [80], [21], [7], [17, 46], [33], [60], [26], [4], [9], [45], [38], [95], [78], [54], [42, 86]]);
