/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

import { createBTreeByArr } from "./createBTree";

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

function postorderTraversal(root: TreeNode | null): number[] {
    let result:number[] = [];

    const stack = new Array<TreeNode | number>();
    let node = root;
    while(stack.length || node){
        if(node){
            stack.push(node.val);
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }

        let nodeOrVal = stack.pop() as TreeNode | number;
        if(typeof(nodeOrVal) == "number"){
            result.push(nodeOrVal);
            node = null;
        } else {
            node = nodeOrVal;
        }
    }

    return result;
};
// @lc code=end

const tree = createBTreeByArr([1, null, 2, 3]);
const result = postorderTraversal(tree);
console.log(result);

