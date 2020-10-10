"use strict";
/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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
function hasCycle(head) {
    if (!head) {
        return false;
    }
    let fast = head;
    let slow = head;
    while (fast && slow) {
        if (fast == slow) {
            return true;
        }
        if (fast.next) {
            fast = fast.next.next;
        }
        slow = slow.next;
    }
    return false;
}
;
// @lc code=end
