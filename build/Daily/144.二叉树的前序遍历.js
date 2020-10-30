"use strict";
/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
function preorderTraversal(root) {
    const results = [];
    function helper(node) {
        if (!node) {
            return;
        }
        results.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return results;
}
;
function preorderTraversalIt(root) {
    if (!root) {
        return [];
    }
    const stack = [root];
    const results = [];
    while (stack.length) {
        const nodeOrVal = stack.pop();
        if (typeof (nodeOrVal) == "number") {
            results.push(nodeOrVal);
        }
        else {
            nodeOrVal.right && stack.push(nodeOrVal.right);
            nodeOrVal.left && stack.push(nodeOrVal.left);
            stack.push(nodeOrVal.val);
        }
    }
    return results;
}
;
// @lc code=end
