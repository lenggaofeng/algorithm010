/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if(!head || !head.next){return;}

    const middle = getMiddleNode(head);
    const tail = reverseNode(middle);
    mergeList(head, tail);
};


function getMiddleNode(head:ListNode):ListNode{
    let fast = head.next;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function reverseNode(head:ListNode):ListNode{
    let pre = head;
    let cur = head.next;
    while(cur){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

function mergeList(head1: ListNode|null, head2:ListNode|null){
    while(head1 && head2){
        let tmp1 = head1.next;
        let tmp2 = head2.next;
        head2.next = tmp1;
        head1.next = head2;
        head1 = tmp1;
        head2 = tmp2;
    }
}

// @lc code=end

