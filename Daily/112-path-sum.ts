/**
 * https://leetcode-cn.com/problems/path-sum/
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

export default null;

//思路 划分为子问题:   hasPathSum(root.left, sum - root.value) 
function hasPathSum(root: TreeNode | null, sum: number): boolean {
    if(!root){
        return false;
    }

    if(!root.left && !root.right){
        return sum == root.val;
    }

    let nextNum = sum - root.val;
    return hasPathSum(root.left, nextNum) || hasPathSum(root.right, nextNum);
};