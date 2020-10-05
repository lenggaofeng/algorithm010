"use strict";
/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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
function addTwoNumbers(l1, l2) {
    let root = null;
    let pre = null;
    let flag = false;
    while (l1 || l2 || flag) {
        let cnt = flag ? 1 : 0;
        if (l1) {
            cnt += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            cnt += l2.val;
            l2 = l2.next;
        }
        flag = cnt >= 10;
        cnt = cnt % 10;
        let node = new ListNode(cnt);
        if (!root) {
            root = node;
        }
        if (pre) {
            pre.next = node;
        }
        pre = node;
    }
    return root;
}
;
// @lc code=end
