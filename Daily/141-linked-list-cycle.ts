/**
 * 
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function hasCycle(head:ListNode) {
    if(!head){return false}
    let fast = head.next;
    let slow = head;
    while(fast && fast.next){
        if(fast == slow){
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};