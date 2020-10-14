"use strict";
/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function swapPairs(head) {
    if (!head) {
        return null;
    }
    let p1 = head;
    let p2 = head.next;
    let preLast = null;
    head = head.next ? head.next : head;
    while (p2) {
        let next = p2.next;
        p2.next = p1;
        p1.next = null;
        if (preLast) {
            preLast.next = p2;
        }
        preLast = p1;
        p1 = next;
        p2 = p1 ? p1.next : null;
    }
    if (p1 && preLast) {
        preLast.next = p1;
    }
    return head;
}
;
function swapPairs1(head) {
    //最多只有一个节点
    if (!head || !head.next) {
        return head;
    }
    let newHead = head.next;
    head.next = swapPairs1(newHead.next);
    newHead.next = head;
    return newHead;
}
;
// @lc code=end
