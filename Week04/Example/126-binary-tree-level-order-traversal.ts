/**
 * Definition for a binary tree node.
 * */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export default null;

function levelOrder(root: TreeNode | null): number[][] {
    if(root == null){
        return [];
    }
    const levels:number[][] = [];

    const queue:TreeNode[] = new Array();
    queue.push(root);
    let curI = 1;
    let queueI = 1;
    let levelMax = 1;
    let level:number[] = [];
    levels.push(level);
    while(queue.length){
        const node = queue.pop() as TreeNode;
        level.push(node.val);
        curI ++;
        if(node.left){
            queue.push(node.left);
            queueI ++;
        }
        if(node.right){
            queue.push(node.right);
            queueI ++;
        }
        if(curI > levelMax && queue.length){
            level = [];
            levels.push(level);
            levelMax = queueI;
        }
    }
    return levels;
};