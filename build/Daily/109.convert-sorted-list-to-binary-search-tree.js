"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * Definition for a binary tree node.
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function sortedListToBST(head) {
    if (head == null) {
        return null;
    }
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    function dfs(left, right) {
        if (left > right) {
            return null;
        }
        const mid = Math.ceil((left + right) / 2);
        const leftNode = dfs(left, mid - 1);
        const rightNode = dfs(mid + 1, right);
        return new TreeNode(arr[mid], leftNode, rightNode);
    }
    return dfs(0, arr.length - 1);
}
;
function sortedListToBST1(head) {
    if (head == null) {
        return null;
    }
    let length = 0;
    let p = head;
    while (p != null) {
        length++;
        p = p.next;
    }
    function dfs(left, right) {
        if (left > right) {
            return null;
        }
        const mid = Math.ceil((left + right) / 2);
        const node = new TreeNode();
        node.left = dfs(left, mid - 1);
        node.val = head.val;
        head = head.next;
        node.right = dfs(mid + 1, right);
        return node;
    }
    return dfs(0, length - 1);
}
;
