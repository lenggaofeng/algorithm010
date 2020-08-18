export default null;
/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if(head == null){return null;}

    let arr:number[] = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }

    function dfs(left:number, right:number): TreeNode | null{
        if(left > right){return null;}
        const mid = Math.ceil((left + right) / 2);
        const leftNode = dfs(left, mid - 1);
        const rightNode = dfs(mid + 1, right);
        return new TreeNode(arr[mid], leftNode, rightNode)
    }
    return dfs(0, arr.length - 1);
};


function sortedListToBST1(head: ListNode | null): TreeNode | null {
    if(head == null){return null;}

    let length:number = 0;
    let p = head;
    while(p != null){
        length ++;
        p = p.next;
    }

    function dfs(left:number, right:number): TreeNode | null{
        if(left > right){return null;}
        const mid = Math.ceil((left + right) / 2);
        const node = new TreeNode();
        node.left = dfs(left, mid - 1);
        node.val = head.val;
        head = head.next;
        node.right = dfs(mid + 1, right);
        return node;
    }
    return dfs(0, length - 1);
};