"use strict";
/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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
function isPalindrome(head) {
    if (!head || !head.next) {
        return true;
    }
    let fast = head;
    let slow = head;
    let pre = null;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        let next = slow.next;
        slow.next = pre;
        pre = slow;
        slow = next;
    }
    //最后一个结点转想
    let left = slow;
    let right = slow.next;
    slow.next = pre;
    if (fast != head && !fast.next) {
        left = left.next;
    }
    while (left && right) {
        if (left.val != right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
}
;
// @lc code=end
