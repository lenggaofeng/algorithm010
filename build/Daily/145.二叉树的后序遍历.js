"use strict";
/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */
Object.defineProperty(exports, "__esModule", { value: true });
const createBTree_1 = require("./createBTree");
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
function postorderTraversal(root) {
    let result = [];
    const stack = new Array();
    let node = root;
    while (stack.length || node) {
        if (node) {
            stack.push(node.val);
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }
        let nodeOrVal = stack.pop();
        if (typeof (nodeOrVal) == "number") {
            result.push(nodeOrVal);
            node = null;
        }
        else {
            node = nodeOrVal;
        }
    }
    return result;
}
;
// @lc code=end
const tree = createBTree_1.createBTreeByArr([1, null, 2, 3]);
const result = postorderTraversal(tree);
console.log(result);
