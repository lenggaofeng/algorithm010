"use strict";
/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 */
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
// 思路， 二叉树
function sortedArrayToBST(nums) {
    function buildTree(left, right) {
        if (left > right) {
            return null;
        }
        const mid = (left + right) >> 1;
        const root = new TreeNode(nums[mid]);
        root.left = buildTree(left, mid - 1);
        root.right = buildTree(mid + 1, right);
        return root;
    }
    return buildTree(0, nums.length - 1);
}
;
