"use strict";
/*
 * @lc app=leetcode.cn id=968 lang=typescript
 *
 * [968] 监控二叉树
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
/**
 * dp[root][0] 表示根节点不加相机的最小数量
 * dp[root][1] 表示根节点加相机的最小数量
 *
 * dp[root][0] = dp[left][1] + dp[right][1]
 * dp[root][1] = min(dp[left][0], dp[left][1]) + min(dp[left][0], dp[left][1]) + 1;
 *
 *
 * dp[leaf][0] = 0;
 * dp[leaf][1] = 1;
 *
 */
function minCameraCover(root) {
    function dfs(root) {
        if (!root) {
            return [Number.MAX_VALUE / 2, 0, 0];
        }
        let [left1, left2, left3] = dfs(root.left);
        let [right1, right2, right3] = dfs(root.right);
        const a = left3 + right3 + 1;
        return [
            a,
            Math.min(a, Math.min(left1 + right2, left2 + right1)),
            Math.min(a, left2 + right2)
        ];
    }
    let [cnt1, cnt2, cnt3] = dfs(root);
    return cnt2;
}
;
// @lc code=end
