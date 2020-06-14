/**
 * Definition for singly-linked list.
 * 
 * */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


//思路: 使用两个指针， 分别指向链表的头部， 然后比较哪个指针的节点小， 哪个指针往前走。直到两个指针都走完
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 == null){ return l2;}
    if(l2 == null){ return l1;}

    const newList = new ListNode();
    let tail = newList;
    while(l1 != null || l2 != null){
        if(l1 == null || (l2 != null && l2.val <= l1.val))
        {
            tail.next = l2;
            l2 = l2.next as ListNode;
        } else if(l2 == null || l1.val <= l2.val){
            tail.next = l1;
            l1 = l1.next;
        }
        tail = tail.next as ListNode;
    }

    return newList.next;
};
