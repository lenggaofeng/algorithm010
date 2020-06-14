"use strict";
/**
 * Definition for singly-linked list.
 *
 * */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
//思路: 使用两个指针， 分别指向链表的头部， 然后比较哪个指针的节点小， 哪个指针往前走。直到两个指针都走完
function mergeTwoLists(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    var newList = new ListNode();
    var tail = newList;
    while (l1 != null || l2 != null) {
        if (l1 == null || (l2 != null && l2.val <= l1.val)) {
            tail.next = l2;
            l2 = l2.next;
        }
        else if (l2 == null || l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        tail = tail.next;
    }
    return newList.next;
}
;
