"use strict";
/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = null;
// @lc code=start
// /**
//  Definition for Node.
class Node {
    constructor(val, left, right, next) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = (next === undefined ? null : next);
    }
}
//  */
function connect(root) {
    if (!root) {
        return root;
    }
    const queue = [root];
    while (queue.length) {
        const n = queue.length;
        let pre = null;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            if (pre) {
                pre.next = node;
            }
            pre = node;
        }
    }
    return root;
}
;
function connect2(root) {
    if (!root) {
        return root;
    }
    let leftmost = root;
    while (leftmost.left) {
        let head = leftmost;
        while (head) {
            head.left.next = head.right;
            if (head.next) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
}
;
// @lc code=end
