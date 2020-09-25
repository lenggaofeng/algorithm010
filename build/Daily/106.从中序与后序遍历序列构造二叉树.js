"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBTree_1 = require("./createBTree");
/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */
const Test_1 = require("./Test");
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
function helper(inorder, postorder, inorderLeft, inorderRight, postorderLeft, postorderRight) {
    if (postorderRight < postorderLeft) {
        return null;
    }
    const rootval = postorder[postorderRight];
    const root = new createBTree_1.TreeNode(rootval);
    let inorderRootI = -1;
    for (let i = inorderLeft; i <= inorderRight; i++) {
        if (inorder[i] == rootval) {
            inorderRootI = i;
            break;
        }
    }
    const leftLength = inorderRootI - inorderLeft;
    let leftPostOrderRight = postorderLeft + leftLength - 1;
    root.left = helper(inorder, postorder, inorderLeft, inorderRootI - 1, postorderLeft, leftPostOrderRight);
    root.right = helper(inorder, postorder, inorderRootI + 1, inorderRight, leftPostOrderRight + 1, postorderRight - 1);
    return root;
}
function buildTree(inorder, postorder) {
    return helper(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
}
;
// @lc code=end
const cases = [
    { input: [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]], output: [3, 9, 20, null, null, 15, 7] }
];
Test_1.testWithResult(cases, ([inorder, postorder]) => {
    const root = buildTree(inorder, postorder);
    console.log(root);
    return createBTree_1.dumpBTree2Arr(root);
}, Test_1.getCompArr(Test_1.CompBase));
