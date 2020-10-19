/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    const values:number[] = [];
    function helper(node:TreeNode){
        values.push(node.val);
        if(node.left){helper(node.left);}
        if(node.right){helper(node.right);}
    }
    helper(root);
    if(values.length < 2){return 0;}
    values.sort((a,b)=>a-b);
    let min = Number.MAX_VALUE;
    for(let i = 0; i < values.length - 1; i++){
        min = Math.min(values[i + 1] - values[i]);
    }

    return min;
};

function getMinimumDifferenceMid(root: TreeNode | null): number {
    if(!root){return 0;}
    let min = Number.MAX_VALUE;
    let hasInit = false;
    let pre = 0;
    function dfs(node:TreeNode | null){
        if(!node){return;}
        dfs(node.left);
        if(hasInit){
            min = Math.min(min, node.val - pre);
        } else {
            pre = node.val;
            hasInit = true;
        }
        dfs(node.right);
    }
    dfs(root);
    return min == Number.MAX_VALUE ? 0 : min;
}
// @lc code=end

