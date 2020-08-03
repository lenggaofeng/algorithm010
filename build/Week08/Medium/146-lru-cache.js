"use strict";
/**
 * https://leetcode-cn.com/problems/lru-cache/#/
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
            this._head = this._tail = node;
            this._size++;
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
        console.log(results.map(v => JSON.stringify(v)).join(' -> '));
    }
}
class LRUCacheNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hashMap = new Map();
        this.linkedList = new DoubleLinkedList(null);
    }
    get(key) {
        const node = this.hashMap.get(key);
        if (!node) {
            return -1;
        }
        this.linkedList.deleteNode(node);
        this.linkedList.addNodeAtIndex(node, 0);
        return node.value.value;
    }
    put(key, value) {
        let node = this.hashMap.get(key);
        if (node) {
            node.value.value = value;
            this.linkedList.deleteNode(node);
            this.linkedList.addNodeAtIndex(node, 0);
        }
        else {
            if (this.linkedList.size >= this.capacity) {
                const tail = this.linkedList.tail;
                this.linkedList.deleteNode(tail);
                this.hashMap.delete(tail.value.key);
            }
            node = this.linkedList.addAtHead(new LRUCacheNode(key, value));
            this.hashMap.set(key, node);
        }
    }
}
class LRUCache2 {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        const val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }
    put(key, value) {
        if (!this.map.has(key)) {
            if (this.map.size >= this.capacity) {
                this.map.delete(this.map.keys().next().value);
            }
        }
        else {
            this.map.delete(key);
        }
        this.map.set(key, value);
    }
}
const list = new LRUCache(2);
function test(cmds, data) {
    cmds.forEach((v, i) => {
        if (i == 0) {
            return;
        }
        const result = list[v].call(list, ...data[i]);
        console.log("==", result, v, ...data[i]);
    });
}
test(["LRUCache", "put", "put", "get", "put", "put", "get"], [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]]);
exports.default = null;
