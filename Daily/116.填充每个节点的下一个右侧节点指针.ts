/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

export default null;
 // @lc code=start
// /**
//  Definition for Node.
class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}
//  */

function connect(root: Node | null): Node | null {
    if(!root){return root;}
    const queue:Node[] = [root];
    while(queue.length){
        const n = queue.length;
        let pre = null;
        for(let i = 0; i < n; i++){
            const node = queue.shift() as Node;
            node.left && queue.push(node.left);    
            node.right && queue.push(node.right);
            if(pre){
                pre.next = node;
            }
            pre = node;
        }
    }
    return root;
};

function connect2(root: Node | null): Node | null {
    if(!root){return root;}
    let leftmost = root;
    while(leftmost.left){
        let head = leftmost;
        while(head){
            head.left.next = head.right;
            if(head.next){
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
};
// @lc code=end

