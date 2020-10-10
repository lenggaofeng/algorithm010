/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第N个节点
 */

import { dumpBTree2Arr } from "./createBTree";

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;

    let first = head;
    let second = head;
    for(let i = 0; i < n + 1; i++){
        if(first){
            first = first.next;
        }
    }
    while(first){
        first = first.next;
        second = second.next;
    }

    if(second && second.next){
        second.next = second.next.next;
    }

    return dummy.next;
};
// @lc code=end

