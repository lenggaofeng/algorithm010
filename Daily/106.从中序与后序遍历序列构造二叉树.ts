import { dumpBTree2Arr, TreeNode } from "./createBTree";
/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

import { Case, CompBase, getCompArr, testWithResult } from "./Test";

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

function helper(inorder: number[], postorder: number[], inorderLeft: number, inorderRight: number, postorderLeft: number, postorderRight: number): TreeNode | null{
    if (postorderRight < postorderLeft) { return null; }
    const rootval = postorder[postorderRight];
    const root = new TreeNode(rootval);

    let inorderRootI = -1;
    for (let i = inorderLeft; i <= inorderRight; i++){
        if (inorder[i] == rootval) {
            inorderRootI = i;
            break;
        }
    }

    const leftLength = inorderRootI  - inorderLeft;
    let leftPostOrderRight = postorderLeft + leftLength - 1;
    root.left = helper(inorder, postorder, inorderLeft, inorderRootI - 1, postorderLeft, leftPostOrderRight);

    root.right = helper(inorder, postorder, inorderRootI + 1, inorderRight, leftPostOrderRight + 1, postorderRight - 1);
    return root;
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    return helper(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end

const cases: Case<[number[], number[]], number[]>[] = [
    { input: [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]], output: [3, 9, 20, null, null, 15, 7]}
];

testWithResult(cases, ([inorder, postorder]) => {
    const root = buildTree(inorder, postorder);
    console.log(root);
    return dumpBTree2Arr(root);
}, getCompArr(CompBase));

